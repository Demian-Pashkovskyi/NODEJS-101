import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    email: {
      type: String,
      required: false,
    },
    year: {
      type: Number,
      required: true,
    },
    onDuty: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const Student = mongoose.model("Student", studentSchema);

export {Student};
