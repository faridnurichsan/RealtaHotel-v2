import { addFapho } from "@/Redux/Action/Hotel/HotelAction";
import Buttons from "@/components/Button";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Select, Upload, UploadProps } from "antd";
import { RcFile, UploadFile } from "antd/es/upload";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddPhoto(props: any) {
  const dispatch = useDispatch();
  const [previewImg, setPreviewImg] = useState();
  const [uploaded, setUploaded] = useState(false);
  const formik = useFormik({
    initialValues: {
      faphoFaci: props.id,
      faphoPrimary: "",
      file: "",
    },
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("faphoFaci", values.faphoFaci);
      payload.append("faphoPrimary", values.faphoPrimary);
      payload.append("file", values.file);

      dispatch(addFapho(payload));
      props.closeAdd();
      window.alert("Data Successfully Insert");
      props.onRefresh();
    },
  });
  const uploadOnChange = (name: any) => (event: any) => {
    const file = event.target.files[0];

    formik.setFieldValue("file", file);

    setUploaded(true);
  };
  const onClearImage = (event: any) => {
    event.preventDefault();
    setUploaded(false);
    setPreviewImg(undefined);
  };
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Region Name :{" "}
      </label>
      <input
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        type="text"
        name="faphoPrimary"
        id="faphoPrimary"
        value={formik.values.faphoPrimary}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        autoComplete="faphoPrimary"
      />
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Foto :{" "}
        </label>
        <div>
          <div>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {uploaded === false ? (
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <>
                    <img crossOrigin="anonymous" src={previewImg} alt="image" />
                    <span
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      onClick={onClearImage}
                    >
                      Remove
                    </span>
                  </>
                )}

                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="foto"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="foto"
                      name="foto"
                      type="file"
                      accept="image/*"
                      onChange={uploadOnChange("file")}
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 1MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={formik.handleSubmit}
        >
          {" "}
          Simpan{" "}
        </button>
        <button
          className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => props.setDisplay(false)}
        >
          {" "}
          Cancel{" "}
        </button>
      </div>
    </div>
  );
}
