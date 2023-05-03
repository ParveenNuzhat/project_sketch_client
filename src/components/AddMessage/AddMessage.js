import React from "react";
import "./AddMessage.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddMessage = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // const newDetail = data.detail.split(/\n/g, "<br />");
    // const newData = {
    //   ...data,
    //   detail: newDetail,
    // };
    // console.log(newData);
    axios.post("http://localhost:5000/messages", data).then((res) => {
      if (res.data.insertedId) {
        alert("message added successfully");
        reset();
      }
    });
  };
  return (
    <div className="add-message">
      <h3 className="mt-5" style={{ textAlign: "center" }}>
        Add a Message from Top Management
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("img")} placeholder="Image url" />
        <input {...register("quote")} placeholder="Quote" />
        <textarea {...register("detail")} placeholder="Detail" />
        <input {...register("name", { required: true })} placeholder="Name" />
        <input {...register("designation")} placeholder="Designation" />
        <input className="w-25 p-3" type="submit" />
      </form>
    </div>
  );
};

export default AddMessage;
