import React from "react";
import SectionHead from "../../pages/Shared/SectionHead/SectionHead";

const ManageClasses = () => {
  return (
    <div>
      <SectionHead title="Manage All User" />
      <div>
        <div className="overflow-x-auto bg-white p-5">
          <h2 className="text-xl py-2 font-semibold">
            Total Users: <span>5</span>
          </h2>
          <table className="table table-zebra">
            {/* head */}
            <thead className="text-lg bg-slate-200 text-slate-950">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody className="text-base">
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
