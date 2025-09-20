import React, { useContext, useEffect, useState } from "react";
 
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Teachers = () => {
  const { speciality } = useParams();

  const [filterTeach, setFilterTeach] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const {teachers} = useContext(AppContext)
  // filter logic
  const filterlogic = () => {
    if (speciality) {
      setFilterTeach(
        teachers.filter((teach) => teach.speciality === speciality)
      );
    } else {
      setFilterTeach(teachers);
    }
  };

  // Running the Filter function When Something(speciality) Changes
  useEffect(() => {
    filterlogic();
  }, [speciality]);
  return (
    <div>
      <p className="text-gray-600">Browse through the teachers specialist</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/*  */}
        <button
          className={`py-1 px-3 border border-cyan-700 rounded shadow-sm shadow-cyan-700 tracking-wide text-cyan-700 text-sm transition-all sm:hidden ${
            showFilter ? "bg-cyan-700 text-orange-50" : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          filter
        </button>
        <div>
          <div
            className={`flex-col gap-4 text-sm text-gray-600 ${
              showFilter ? "flex" : "hidden sm:flex"
            }`}
          >
            <p
              className={`w-[85vw] sm:w-auto pl-3 py-1.5 pr-16 border border-cyan-700 rounded transition-all cursor-pointer ${
                speciality === "Computer Science"
                  ? "bg-cyan-700 text-orange-50"
                  : ""
              } `}
              onClick={() =>
                navigate(
                  speciality === "Computer Science"
                    ? "/teachers"
                    : "/teachers/Computer Science"
                )
              }
            >
              Computer Science
            </p>
            <p
              className={`w-[85vw] sm:w-auto pl-3 py-1.5 pr-16 border border-cyan-700 rounded transition-all cursor-pointer ${
                speciality === "Chemistry"
                  ? "bg-cyan-700 text-orange-50"
                  : ""
              } `}
              onClick={() =>
                navigate(
                  speciality === "Chemistry"
                    ? "/teachers"
                    : "/teachers/Chemistry"
                )
              }
            >
              Chemistry
            </p>

            <p
              className={`w-[85vw] sm:w-auto pl-3 py-1.5 pr-16 border border-cyan-700 rounded transition-all cursor-pointer ${
                speciality === "Physics"
                  ? "bg-cyan-700 text-orange-50"
                  : ""
              } `}
              onClick={() =>
                navigate(
                  speciality === "Physics"
                    ? "/teachers"
                    : "/teachers/Physics"
                )
              }
            >
              Physics
            </p>

            <p
              className={`w-[85vw] sm:w-auto pl-3 py-1.5 pr-16 border border-cyan-700 rounded transition-all cursor-pointer ${
                speciality === "Math"
                  ? "bg-cyan-700 text-orange-50"
                  : ""
              } `}
              onClick={() =>
                navigate(speciality === "Math" ? "/teachers" : "/teachers/Math")
              }
            >
              Math
            </p>

            <p
              className={`w-[85vw] sm:w-auto pl-3 py-1.5 pr-16 border border-cyan-700 rounded transition-all cursor-pointer ${
                speciality === "English"
                  ? "bg-cyan-700 text-orange-50"
                  : ""
              } `}
              onClick={() =>
                navigate(
                  speciality === "English" ? "/teachers" : "/teachers/English"
                )
              }
            >
              English
            </p>

            <p
              className={`w-[85vw] sm:w-auto pl-3 py-1.5 pr-16 border border-cyan-700 rounded transition-all cursor-pointer ${
                speciality === "German"
                  ? "bg-cyan-700 text-orange-50"
                  : ""
              } `}
              onClick={() =>
                navigate(
                  speciality === "German" ? "/teachers" : "/teachers/German"
                )
              }
            >
              German
            </p>

            <p
              className={`w-[85vw] sm:w-auto pl-3 py-1.5 pr-16 border border-cyan-700 rounded transition-all cursor-pointer ${
                speciality === "Biology"
                  ? "bg-cyan-700 text-orange-50"
                  : ""
              } `}
              onClick={() =>
                navigate(
                  speciality === "Biology" ? "/teachers" : "/teachers/Biology"
                )
              }
            >
              Biology
            </p>
          </div>
        </div>
        <div className="w-full grid sm:grid-cols-4 grid-cols-auto gap-4 gap-y-6">
          {filterTeach.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/lecture/${item._id}`);
                scrollTo(0, 0);
              }}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-cyan-100" src={item.image} alt="teacher_pro" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Avaliable</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
