// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
// import { ChevronDownIcon } from "@heroicons/react/16/solid";
// // import { classNames } from "../utils/classNames";

// export default function Form() {
//   return (
//     <form className="bg-F8F6F0 p-6 rounded-md">
//       <div className="space-y-12">
//         {/* Profile Section */}
//         <div className="border-b border-secondary pb-12">
//           <h2 className="text-base font-semibold text-text">Profile</h2>
//           <p className="mt-1 text-sm text-text/70">
//             This information will be displayed publicly so be careful what you
//             share.
//           </p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-4">
//               <label
//                 htmlFor="username"
//                 className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                 Username
//               </label>
//               <div className="mt-2">
//                 <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-(--color-primary) dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-(--color-primary-active)">
//                   <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6 dark:text-gray-400">
//                     workcation.com/
//                   </div>
//                   <input
//                     id="username"
//                     name="username"
//                     type="text"
//                     placeholder="janesmith"
//                     className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label
//                 htmlFor="about"
//                 className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                 About
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="about"
//                   name="about"
//                   rows={3}
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-(--color-primary) sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-(--color-primary-active)"
//                   defaultValue={""}
//                 />
//               </div>
//               <p className="mt-3 text-sm/6 text-gray-600 dark:text-gray-400">
//                 Write a few sentences about yourself.
//               </p>
//             </div>

//             <div className="col-span-full">
//               <label
//                 htmlFor="photo"
//                 className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                 Photo
//               </label>
//               <div className="mt-2 flex items-center gap-x-3">
//                 <UserCircleIcon
//                   aria-hidden="true"
//                   className="size-12 text-gray-300 dark:text-gray-500"
//                 />
//                 <button
//                   type="button"
//                   className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/20">
//                   Change
//                 </button>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label
//                 htmlFor="cover-photo"
//                 className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                 Cover photo
//               </label>
//               <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 dark:border-white/25">
//                 <div className="text-center">
//                   <PhotoIcon
//                     aria-hidden="true"
//                     className="mx-auto size-12 text-gray-300 dark:text-gray-600"
//                   />
//                   <div className="mt-4 flex text-sm/6 text-gray-600 dark:text-gray-400">
//                     <label
//                       htmlFor="file-upload"
//                       className="relative cursor-pointer rounded-md bg-transparent font-semibold text-(--color-secondary) focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-(--color-secondary) hover:text-(--color-secondary-hover) dark:text-(--color-primary) dark:focus-within:outline-(--color-primary) dark:hover:text-(--color-primary-hover)">
//                       <span>Upload a file</span>
//                       <input
//                         id="file-upload"
//                         name="file-upload"
//                         type="file"
//                         className="sr-only"
//                       />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs/5 text-gray-600 dark:text-gray-400">
//                     PNG, JPG, GIF up to 10MB
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-b border-gray-900/10 pb-12 dark:border-white/10">
//           <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
//             Personal Information
//           </h2>
//           <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
//             Use a permanent address where you can receive mail.
//           </p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-3">
//               <label
//                 htmlFor="first-name"
//                 className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                 First name
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="first-name"
//                   name="first-name"
//                   type="text"
//                   autoComplete="given-name"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-(--color-primary) sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-(--color-primary)"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label
//                 htmlFor="last-name"
//                 className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                 Last name
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="last-name"
//                   name="last-name"
//                   type="text"
//                   autoComplete="family-name"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-(--color-primary) sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-(--color-primary)"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-4">
//               <label
//                 htmlFor="email"
//                 className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-(--color-primary) sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-(--color-primary)"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label
//                 htmlFor="country"
//                 className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                 Country
//               </label>
//               <div className="mt-2 grid grid-cols-1">
//                 <select
//                   id="country"
//                   name="country"
//                   autoComplete="country-name"
//                   className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-(--color-primary) sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus:outline-(--color-primary)">
//                   <option>KH</option>
//                   <option>KI</option>
//                   <option>KT</option>
//                 </select>
//                 <ChevronDownIcon
//                   aria-hidden="true"
//                   className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
//                 />
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label
//                 htmlFor="street-address"
//                 className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                 Street address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="street-address"
//                   name="street-address"
//                   type="text"
//                   autoComplete="street-address"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-(--color-primary) sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-(--color-primary)"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label
//                 htmlFor="city"
//                 className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                 City
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="city"
//                   name="city"
//                   type="text"
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-(--color-primary) sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-(--color-primary)"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="region"
//                 className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                 State / Province
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="region"
//                   name="region"
//                   type="text"
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-(--color-primary) sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-(--color-primary)"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="postal-code"
//                 className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                 ZIP / Postal code
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="postal-code"
//                   name="postal-code"
//                   type="text"
//                   autoComplete="postal-code"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-(--color-primary) sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-(--color-primary)"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-b border-gray-900/10 pb-12 dark:border-white/10">
//           <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
//             Notifications
//           </h2>
//           <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
//             We'll always let you know about important changes, but you pick what
//             else you want to hear about.
//           </p>

//           <div className="mt-10 space-y-10">
//             <fieldset>
//               <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
//                 By email
//               </legend>
//               <div className="mt-6 space-y-6">
//                 <div className="flex gap-3">
//                   <div className="flex h-6 shrink-0 items-center">
//                     <div className="group grid size-4 grid-cols-1">
//                       <input
//                         defaultChecked
//                         id="comments"
//                         name="comments"
//                         type="checkbox"
//                         aria-describedby="comments-description"
//                         className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-(--status-success) checked:bg-(--status-success) indeterminate:border-(--status-success) indeterminate:bg-(--status-success) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--status-success) disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:checked:border-(--status-success) dark:checked:bg-(--status-success) dark:indeterminate:border-(--status-success) dark:indeterminate:bg-(--status-success) dark:focus-visible:outline-(--status-success) dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:checked:bg-white/10 forced-colors:appearance-auto"
//                       />
//                       <svg
//                         fill="none"
//                         viewBox="0 0 14 14"
//                         className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25 dark:group-has-disabled:stroke-white/25">
//                         <path
//                           d="M3 8L6 11L11 3.5"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="opacity-0 group-has-checked:opacity-100"
//                         />
//                         <path
//                           d="M3 7H11"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="opacity-0 group-has-indeterminate:opacity-100"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="text-sm/6">
//                     <label
//                       htmlFor="comments"
//                       className="font-medium text-gray-900 dark:text-white">
//                       Comments
//                     </label>
//                     <p
//                       id="comments-description"
//                       className="text-gray-500 dark:text-gray-400">
//                       Get notified when someones posts a comment on a posting.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex gap-3">
//                   <div className="flex h-6 shrink-0 items-center">
//                     <div className="group grid size-4 grid-cols-1">
//                       <input
//                         id="candidates"
//                         name="candidates"
//                         type="checkbox"
//                         aria-describedby="candidates-description"
//                         className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-(--status-success) checked:bg-(--status-success) indeterminate:border-(--status-success) indeterminate:bg-(--status-success) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--status-success) disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:checked:border-(--status-success) dark:checked:bg-(--status-success) dark:indeterminate:border-(--status-success) dark:indeterminate:bg-(--status-success) dark:focus-visible:outline-(--status-success) dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:checked:bg-white/10 forced-colors:appearance-auto"
//                       />
//                       <svg
//                         fill="none"
//                         viewBox="0 0 14 14"
//                         className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25 dark:group-has-disabled:stroke-white/25">
//                         <path
//                           d="M3 8L6 11L11 3.5"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="opacity-0 group-has-checked:opacity-100"
//                         />
//                         <path
//                           d="M3 7H11"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="opacity-0 group-has-indeterminate:opacity-100"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="text-sm/6">
//                     <label
//                       htmlFor="candidates"
//                       className="font-medium text-gray-900 dark:text-white">
//                       Candidates
//                     </label>
//                     <p
//                       id="candidates-description"
//                       className="text-gray-500 dark:text-gray-400">
//                       Get notified when a candidate applies for a job.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex gap-3">
//                   <div className="flex h-6 shrink-0 items-center">
//                     <div className="group grid size-4 grid-cols-1">
//                       <input
//                         id="offers"
//                         name="offers"
//                         type="checkbox"
//                         aria-describedby="offers-description"
//                         className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-(--status-success) checked:bg-(--status-success) indeterminate:border-(--status-success) indeterminate:bg-(--status-success) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--status-success) disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:checked:border-(--status-success) dark:checked:bg-(--status-success) dark:indeterminate:border-(--status-success) dark:indeterminate:bg-(--status-success) dark:focus-visible:outline-(--status-success) dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:checked:bg-white/10 forced-colors:appearance-auto"
//                       />
//                       <svg
//                         fill="none"
//                         viewBox="0 0 14 14"
//                         className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25 dark:group-has-disabled:stroke-white/25">
//                         <path
//                           d="M3 8L6 11L11 3.5"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="opacity-0 group-has-checked:opacity-100"
//                         />
//                         <path
//                           d="M3 7H11"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="opacity-0 group-has-indeterminate:opacity-100"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="text-sm/6">
//                     <label
//                       htmlFor="offers"
//                       className="font-medium text-gray-900 dark:text-white">
//                       Offers
//                     </label>
//                     <p
//                       id="offers-description"
//                       className="text-gray-500 dark:text-gray-400">
//                       Get notified when a candidate accepts or rejects an offer.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </fieldset>

//             <fieldset>
//               <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
//                 Push notifications
//               </legend>
//               <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
//                 These are delivered via SMS to your mobile phone.
//               </p>
//               <div className="mt-6 space-y-6">
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     defaultChecked
//                     id="push-everything"
//                     name="push-notifications"
//                     type="radio"
//                     className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-(--color-primary-active) checked:bg-(--color-primary-active) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary-active) disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-white/10 dark:bg-white/5 dark:checked:border-(--color-primary) dark:checked:bg-(--color-primary) dark:focus-visible:outline-(--color-primary) dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
//                   />
//                   <label
//                     htmlFor="push-everything"
//                     className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                     Everything
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-email"
//                     name="push-notifications"
//                     type="radio"
//                     className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-(--color-primary-active) checked:bg-(--color-primary-active) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary-active) disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-white/10 dark:bg-white/5 dark:checked:border-(--color-primary) dark:checked:bg-(--color-primary) dark:focus-visible:outline-(--color-primary) dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
//                   />
//                   <label
//                     htmlFor="push-email"
//                     className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                     Same as email
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-nothing"
//                     name="push-notifications"
//                     type="radio"
//                     className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-(--color-primary-active) checked:bg-(--color-primary-active) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary-active) disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-white/10 dark:bg-white/5 dark:checked:border-(--color-primary) dark:checked:bg-(--color-primary) dark:focus-visible:outline-(--color-primary) dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
//                   />
//                   <label
//                     htmlFor="push-nothing"
//                     className="block text-sm/6 font-medium text-gray-900 dark:text-white">
//                     No push notifications
//                   </label>
//                 </div>
//               </div>
//             </fieldset>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 flex items-center justify-end gap-x-6">
//         <button
//           type="button"
//           className="text-sm/6 font-semibold text-gray-900 dark:text-white">
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:focus-visible:outline-indigo-500">
//           Save
//         </button>
//       </div>
//     </form>
//   );
// }

// // -------------------------------------------------------------------------------------------
// import InputText from "./input_forms/InputText";
// import TextArea from "./input_forms/TextArea";
// import SelectField from "./input_forms/SelectField";
// import CheckboxField from "./input_forms/Checkbox";
// import RadioField from "./input_forms/RadioField";
// import UploadFile from "./input_forms/UploadFile";

// export default function Form() {
//   return (
//     <form className="bg-F8F6F0 p-6 rounded-md space-y-8">
//       <InputText label="Username" id="username" placeholder="janesmith" />

//       <TextArea
//         label="About"
//         id="about"
//         placeholder="Write about yourself..."
//       />

//       <SelectField label="Country" id="country" options={["KH", "KI", "KT"]} />

//       <UploadFile />

//       <CheckboxField
//         id="comments"
//         label="Comments"
//         description="Get notified about comments."
//         defaultChecked
//       />

//       <RadioField
//         id="notif-all"
//         name="notifications"
//         label="Send all notifications"
//         value="all"
//         defaultChecked
//       />
//       <RadioField
//         id="notif-important"
//         name="notifications"
//         label="Only important"
//         value="important"
//       />
//     </form>
//   );
// }

import InputText from "./input_forms/InputText";
import TextArea from "./input_forms/TextArea";
import SelectField from "./input_forms/SelectField";
import CheckboxField from "./input_forms/Checkbox";
import RadioField from "./input_forms/RadioField";
import UploadFile from "./input_forms/UploadFile";
import { formSchema, type Category, type Certificates } from "./FormSchema";

export default function FormsInput({
  category,
  certificate,
}: {
  category: Category;
  certificate: Certificates;
}) {
  const fields = formSchema[certificate][category];

  if (!fields) {
    return (
      <div className="p-6 rounded-xl bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
        Jenis sertifikat ini tidak memiliki form untuk kategori {category}
      </div>
    );
  }

  return (
    <form className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6">
      {fields.map((field, i) => {
        switch (field.type) {
          case "text":
            return (
              <InputText
                key={i}
                id={field.name}
                label={field.label}
                placeholder={field.placeholder}
              />
            );

          case "textarea":
            return (
              <TextArea
                key={i}
                id={field.name}
                label={field.label}
                placeholder={field.placeholder}
              />
            );

          case "select":
            return (
              <SelectField
                key={i}
                id={field.name}
                label={field.label}
                options={field.options}
              />
            );

          case "checkbox":
            return (
              <CheckboxField
                key={i}
                id={field.name}
                label={field.label}
                description={field.description}
                defaultChecked={field.defaultChecked}
              />
            );
        }
      })}
    </form>
  );
}
