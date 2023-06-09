import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    data: selectedClasses = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["selected-class"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `http://localhost:5000/selectedClass/${user.email}`
      );
      return res.data;
    },
  });
  return [selectedClasses, refetch, isLoading];
};

export default useSelectedClass;
