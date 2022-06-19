import React, { useRef, useState, useEffect, useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { UploadContext } from "./Globals/UploadContext";

const RichEditor = ({ initialValue, stateKey }) => {
  const [post, setPost] = useContext(UploadContext);
  const editorRef = useRef(null);

  const [value, setValue] = useState(initialValue ?? "");
  useEffect(() => setValue(initialValue ?? ""), [initialValue]);
  useEffect(() => {
    setPost((p) => {
      return { ...p, [stateKey]: value };
    });
  }, [value]);

  return (
    <Editor
      ref={editorRef}
      value={value}
      apiKey="ax5ig85ggg9fzbyp7c3rdbdq9gjvixgdah309zz7vi423xp8"
      onInit={(evt, editor) => (editorRef.current = editor)}
      initialValue={initialValue}
      onEditorChange={(newValue, editor) => setValue(newValue)}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style: "body { font-family:Rubik, sans-serif; font-size:18px }",
      }}
    />
  );
};

export default RichEditor;
