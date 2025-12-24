import React from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

export default function UploadFile() {
  return (
    <div className="col-span-full">
      <label
        htmlFor="cover-photo"
        className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Upload File
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 dark:border-white/25">
        <div className="text-center">
          <PhotoIcon
            aria-hidden="true"
            className="mx-auto size-12 text-gray-300 dark:text-gray-600"
          />

          <div className="mt-4 flex text-sm/6 text-gray-600 dark:text-gray-400">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-transparent font-semibold text-(--color-secondary) focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-(--color-secondary) hover:text-(--color-secondary-hover) dark:text-(--color-primary) dark:focus-within:outline-(--color-primary) dark:hover:text-(--color-primary-hover)">
              <span>Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>

          <p className="text-xs/5 text-gray-600 dark:text-gray-400">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>
    </div>
  );
}
