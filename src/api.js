import axios from "axios";

const BASE_URL = "https://trushbin.my.id/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

const apiService = {

  // ========== AUTHENTICATION ==========
  login: (data) =>
    api.post("/login", data),

  signup: (data) =>
    api.post("/signup", data),

  // ========== TRASH DATA ==========
  sendTrashData: (data) =>
    api.post("/trash", data),

  getTrashData: () =>
    api.get("/trash"),

  deleteSingleTrash: (id) =>
    api.delete(`/trash/delete/${id}`),

  // ========== USER MANAGEMENT ==========
  getAdmins: () =>
    api.get("/admins"),

  getPendingUsers: () =>
    api.get("/pending-users"),

  approveUser: (email, action) =>
    api.post("/approve-user", { email, action }),

  deleteUser: (email) =>
    api.post("/delete-user", { email }),

  // ========== BIN MANAGEMENT ==========
  resetBin: (binId) =>
    api.post("/reset", { bin_id: binId }),

  testSensor: () =>
    api.get("/test-sensor"),

};

export default apiService;