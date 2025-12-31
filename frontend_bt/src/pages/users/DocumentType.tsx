import { useNavigate } from "react-router-dom";
import Card from "../../components/Card"; // import Card dari file terpisah

export default function DocumentType() {
  const navigate = useNavigate();
  const handleCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    // simulasi login berhasil
    navigate("/users/certificate-type");
  };

  const handleFormulir = (e: React.FormEvent) => {
    e.preventDefault();
    // simulasi login berhasil
    navigate("/users/form-type");
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="flex flex-col items-center p-6 gap-3">
        <h1 className="text-sm font-semibold text-(--color-primary) mb-2 text-center opacity-90">
          Pilih Dokumen
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* CARD SERTIFIKAT */}
        <Card>
          <div className="flex flex-col items-center gap-4">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-16 h-16 text-gray-800 dark:text-white">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M23 1v18h-3v-1h2V2H2v16h8v1H1V1zm-7 2H8v1h8zm-2 3V5h-4v1zm-7 5H3v1h4zm0 2H3v1h4zm-4 3h2v-1H3zm14-3a2 2 0 1 1-2-2 2.002 2.002 0 0 1 2 2zm-1 0a1 1 0 1 0-1 1 1.001 1.001 0 0 0 1-1zm.002-4.293a.965.965 0 0 0 1.32.55 1.08 1.08 0 0 1 1.213.207 1.066 1.066 0 0 1 .21 1.21.966.966 0 0 0 .548 1.324 1.064 1.064 0 0 1 0 2.004.965.965 0 0 0-.549 1.323A1.05 1.05 0 0 1 18 16.816v7.046l-3-2.538-3 2.538v-7.046a1.05 1.05 0 0 1-.744-1.49.965.965 0 0 0-.549-1.324 1.064 1.064 0 0 1 0-2.004.966.966 0 0 0 .549-1.324 1.066 1.066 0 0 1 .209-1.21 1.08 1.08 0 0 1 1.212-.206.965.965 0 0 0 1.32-.551 1.064 1.064 0 0 1 2.005 0zm.998 13v-5.04a.93.93 0 0 0-.998.625 1.064 1.064 0 0 1-2.004 0 .93.93 0 0 0-.998-.625v5.039l2-1.692zm-1.94-4.749a1.967 1.967 0 0 1 1.853-1.308 2.12 2.12 0 0 1 .87.197l.058-.091a1.964 1.964 0 0 1 1.116-2.695v-.122a1.966 1.966 0 0 1-1.116-2.695l-.087-.084a1.965 1.965 0 0 1-2.694-1.117h-.12a1.965 1.965 0 0 1-2.694 1.117l-.087.084a1.966 1.966 0 0 1-1.116 2.695v.122a1.964 1.964 0 0 1 1.116 2.695l.058.09a2.12 2.12 0 0 1 .87-.196 1.967 1.967 0 0 1 1.853 1.308L15 17z"></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
              </g>
            </svg>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
            Sertifikat
          </h2>

          <button
            type="submit"
            onClick={handleCertificate}
            className="w-full rounded-md bg-(--color-primary) px-4 py-2 text-sm font-semibold text-gray-900  shadow-sm hover:bg-(--color-primary-hover) focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--color-primary-active) dark:bg-(--color-primary) dark:hover:bg-(--color-primary-hover)">
            Buat
          </button>
        </Card>

        <Card>
          <div className="flex flex-col items-center gap-4">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-16 h-16 text-gray-800 dark:text-white">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M6 10h12v1H6zM3 1h12.29L21 6.709V23H3zm12 6h5v-.2L15.2 2H15zM4 22h16V8h-6V2H4zm2-7h12v-1H6zm0 4h9v-1H6z"></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
              </g>
            </svg>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
            Formulir
          </h2>

          <button
            type="submit"
            onClick={handleFormulir}
            className="w-full rounded-md bg-(--color-primary) px-4 py-2 text-sm font-semibold text-gray-900  shadow-sm hover:bg-(--color-primary-hover) focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--color-primary-active) dark:bg-(--color-primary) dark:hover:bg-(--color-primary-hover)">
            Buat
          </button>
        </Card>
      </div>
    </div>
  );
}
