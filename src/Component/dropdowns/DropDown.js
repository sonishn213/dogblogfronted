import React, { useState, useId, useRef, useEffect, useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { v4 as uuid } from "uuid";
import { UploadContext } from "../Globals/UploadContext";
import PropTypes from "prop-types";
import axios from "axios";
import useFetch from "../../Hooks/useFetch";
const DropDown = ({ Dtitle, stateKey }) => {
  /***************Drop down display logic Starts here*************************************************** */

  const dropDown = useRef(null);
  const clickedField = useRef(null);

  const id = useId();

  function ToggleDropDown(event, trigerElement, dropDownElement) {
    //function to toggle dropdown on click inside and outside trigelement
    const clickedElement = event.target;
    if (clickedElement == trigerElement.current) {
      //show dropdown if clicked elmt is the target elmt
      dropDownElement.current.classList.toggle("hidden");
    } else if (!dropDownElement.current.contains(clickedElement)) {
      //hide dropdown if clicked outside but not inside the dropdown
      dropDownElement.current.classList.add("hidden");
    }
  }
  function DocClickListner(event) {
    //function to add event listener
    ToggleDropDown(event, clickedField, dropDown);
  }
  useEffect(() => {
    document.addEventListener("click", DocClickListner);

    return () => document.removeEventListener("click", DocClickListner);
  }, []);

  /***************Drop down display logic ends here*************************************************** */
  /***************adding data to local storage [tag storage code]*************************************************** */

  const inputRef = useRef(null);
  const tagsDisplaydiv = useRef(null);

  //called to display tags in the droopdown form database on first load
  const [tagsDisplayArr, setTagsDisplayArr] = useState([]);

  let url2 = `${process.env.REACT_APP_BACKEND_HOST}/getAllCollection.php`;
  const [d_data, d_loading, d_error, refetch] = useFetch(url2);
  if (d_error) {
    console.log("Error while fetching data");
    console.log(d_error);
  }

  useEffect(() => {
    if (d_data) {
      if (!d_data.error) {
        console.log(d_data.result);
        setTagsDisplayArr(d_data.result);
      } else {
        console.log(d_data.message);
      }
    }
  }, [d_data]);
  //insert collection to database

  const handleTagsubmit = async () => {
    //called when submiting the input field inside dropdown to add inputed data to tagInputData state array
    const url1 = `${process.env.REACT_APP_BACKEND_HOST}/insertCollection.php`;
    let collectionInput = inputRef.current.value;
    inputRef.current.value = "";
    if (collectionInput.length > 0) {
      const fd = new FormData();
      fd.append("collection", collectionInput);
      let response = await axios.post(url1, fd);
      console.log(response.data.message);
      if (!response.data.error) {
        refetch();
      }
    }
  };
  //remove tags when x button clicked on the tags list
  const removeTagfromLS = async (id) => {
    const url1 = `${process.env.REACT_APP_BACKEND_HOST}/deleteSingleCollection.php`;
    const fd = new FormData();
    fd.append("c_id", id);
    let response = await axios.post(url1, fd);
    console.log(response.data.message);
    if (!response.data.error) {
      refetch();
    }

    removeTagFromInput(id);
  };
  /*****************[tag storage code] ends here************************************************* */
  /***************adding tags to display input box [tags added to input code]*************************************************** */

  const [tagInput, settagInput] = useState({
    id: "",
    c_name: "",
  });
  //to insert tags to top input filesd
  const insertTagsToInput = (tags) => {
    settagInput(tags);
  };
  //to remove tag from top text feild
  const removeTagFromInput = (id) => {
    settagInput({ id: "", c_name: "" });
  };
  /***************[tags added to input code] end here *************************************************** */
  //tags selected from dropdown are saved as array in tagInput state
  //pass this state to global upload state
  const [post, setPost] = useContext(UploadContext);
  useEffect(() => {
    console.log(tagInput);
    if (tagInput.c_name.length > 0) {
      setPost((prevValue) => {
        return {
          ...prevValue,
          [stateKey]: { ...tagInput },
        };
      });
    }
  }, [tagInput]);

  return (
    <div>
      <div
        id={id}
        ref={clickedField}
        className=" rounded-md px-4 py-2 w-full border-2  border-slate-300 text-lg flex space-x-2 overflow-x-auto "
      >
        {tagInput.c_name ? (
          <div
            key={tagInput.id + "k"}
            className="text-white bg-yellow-500 pl-2 rounded-md flex"
          >
            <div>{tagInput.c_name}</div>
            <button
              className="px-2"
              onClick={() => removeTagFromInput(tagInput.id)}
            >
              <AiOutlineClose />
            </button>
          </div>
        ) : (
          <div className="relative -z-10 top-0  h-full left-0 text-slate-400">
            {"Select" + Dtitle}
          </div>
        )}
      </div>
      <div className="relative">
        <div
          id={id + "dropdown"}
          ref={dropDown}
          className="w-full  py-2  shadow-lg rounded-md absolute bg-white hidden z-40"
        >
          <div className="flex items-stretch mx-2 border-2  border-slate-300 rounded-md">
            <input
              type="text"
              className=" px-4 py-2 w-full  text-lg outline-none"
              ref={inputRef}
              onKeyPress={(e) => e.key === "Enter" && handleTagsubmit()}
            />
            <button
              type="button"
              className="block border-l-2 border-slate-300 px-2 text-slate-500 bg-slate-100"
              onClick={handleTagsubmit}
            >
              <FaPlus />
            </button>
          </div>
          <div>
            {tagsDisplayArr.map((item) => {
              return (
                <div
                  key={item.id}
                  ref={tagsDisplaydiv}
                  className="flex justify-between item-center py-2 px-3 hover:bg-slate-500 hover:text-white cursor-pointer"
                >
                  <div
                    className="flex-grow"
                    onClick={() => {
                      insertTagsToInput(item);
                    }}
                  >
                    {item.c_name}
                  </div>
                  <button
                    onClick={() => {
                      removeTagfromLS(item.id);
                    }}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="text-slate-400">Enter maximum 3 tags</p>
        </div>
      </div>
    </div>
  );
};
DropDown.propTypes = {
  Dtitle: PropTypes.string,
  tablename: PropTypes.string.isRequired,
  stateKey: PropTypes.string.isRequired,
};
export default DropDown;
