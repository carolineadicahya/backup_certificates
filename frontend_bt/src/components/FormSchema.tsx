export type FieldType = "text" | "textarea" | "select" | "checkbox";
export type Category = "ikan" | "hewan" | "tumbuhan";
export type Certificate = "health" | "quarantine";

export interface BaseField {
  type: FieldType;
  name: string;
  label: string;
}

export interface TextField extends BaseField {
  type: "text";
  placeholder?: string;
}

export interface TextAreaField extends BaseField {
  type: "textarea";
  placeholder?: string;
}

export interface SelectFieldType extends BaseField {
  type: "select";
  options: string[];
}

export interface CheckboxField extends BaseField {
  type: "checkbox";
  description?: string;
  defaultChecked?: boolean;
}

export type FormField =
  | TextField
  | TextAreaField
  | SelectFieldType
  | CheckboxField;

// export type Category = "ikan" | "hewan" | "tumbuhan";
// export type Certificate = "health" | "quarantine";

export const formSchema: Record<Certificate, Record<Category, FormField[]>> = {
  health: {
    ikan: [
      { type: "text", name: "nama", label: "Nama Ikan", placeholder: "Lele" },
      {
        type: "text",
        name: "spesies",
        label: "Spesies",
        placeholder: "Clarias",
      },
      {
        type: "checkbox",
        name: "habitat",
        label: "Habitat Liar",
        description: "Centang jika ikan berasal dari alam liar",
      },
      { type: "text", name: "tanggal", label: "Tanggal Pemeriksaan" },
    ],
    hewan: [
      { type: "text", name: "nama", label: "Nama Hewan" },
      { type: "text", name: "spesies", label: "Spesies" },
      { type: "textarea", name: "kondisi", label: "Kondisi Kesehatan" },
    ],
    tumbuhan: [
      { type: "text", name: "nama", label: "Nama Tanaman" },
      { type: "text", name: "varietas", label: "Varietas" },
    ],
  },

  quarantine: {
    ikan: [
      { type: "text", name: "lokasi", label: "Lokasi Karantina" },
      { type: "text", name: "suhu", label: "Suhu Air" },
    ],
    hewan: [
      { type: "text", name: "lokasi", label: "Lokasi Karantina" },
      { type: "text", name: "kandang", label: "Jenis Kandang" },
    ],
    tumbuhan: [{ type: "text", name: "lokasi", label: "Lokasi Karantina" }],
  },
};
