import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = Schema;

const enquireSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    course: {
      type: String,
      required: true,
      min: 5,
      max: 64,
    },
    counsiler: {
      type: String,
      requied: true,
      default: "none",
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("Enquire", enquireSchema);
