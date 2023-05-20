import React from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import useTitle from "../../Hook/useTitle";

const Blogs = () => {
  useTitle('blogs')
  return (
    <div className="grid md:grid-cols-2 gap-4 p-8 text-white shadow-2xl">
      <div className="  p-6 text-justify bg-green-600 rounded-lg mt-12 mx-auto">
        <p>
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </p>
        <p className="mt-3">
          {" "}
          <FaRegArrowAltCircleDown></FaRegArrowAltCircleDown> Access Token: An
          authorization credential issued to a client for accessing protected
          resources. It is included in requests and typically stored securely in
          cookies or browser storage. Refresh Token: A long-lived credential
          used to obtain a new access token after expiration. It is securely
          stored by the client, commonly as an HTTP-only cookie.
        </p>
      </div>

      <div className=" p-6 text-justify bg-green-600 rounded-lg mt-12 mx-auto">
        <p>2. Compare SQL and NoSQL databases?</p>
        <p className="mt-3">
          {" "}
          <FaRegArrowAltCircleDown></FaRegArrowAltCircleDown>
          SQL Databases: Structured, table-based databases that ensure data
          integrity and support complex queries using Structured Query Language
          (SQL). NoSQL Databases: Non-relational, schema-less databases that
          provide flexible data models and horizontal scalability for handling
          large amounts of unstructured or semi-structured data.
        </p>
      </div>

      <div className=" p-6 text-justify bg-green-600 rounded-lg  mx-auto">
        <p>3. What is express js? What is Nest JS ?</p>
        <p className="mt-3">
          {" "}
          <FaRegArrowAltCircleDown></FaRegArrowAltCircleDown>
          Express.js: Minimalist Node.js framework for building web applications
          and APIs with routing, middleware, and template rendering. NestJS:
          Progressive Node.js framework using TypeScript, offering modularity,
          dependency injection, and a structured approach to building scalable
          server-side applications.
        </p>
      </div>

      <div className=" p-6 text-justify bg-green-600 rounded-lg  mx-auto">
        <p>4. What is MongoDB aggregate and how does it work ?</p>
        <p className="mt-3">
          {" "}
          <FaRegArrowAltCircleDown></FaRegArrowAltCircleDown>
          MongoDB's aggregate function performs data aggregation operations by
          processing data through a pipeline of stages, allowing complex
          operations like filtering, grouping, and calculations on input
          documents to generate desired output.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
