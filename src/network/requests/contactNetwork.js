import { baseManager } from "../base/baseManager";

export const contactNetwork = {
  postContactInfo: (data) => {
    return baseManager.post(`/mail`, data);
  },
};
