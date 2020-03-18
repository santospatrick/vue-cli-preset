import api from "@/network/api";

class UserService {
  getAll(...rest) {
    return api.get("users", ...rest);
  }

  getById(id, ...rest) {
    return api.get(`users/${id}`, ...rest);
  }

  deleteById(id, ...rest) {
    return api.delete(`users/${id}`, ...rest);
  }

  create(user, ...rest) {
    return api.post("users", user, ...rest);
  }

  update(id, user, ...rest) {
    // ".patch()" pq o json-server é semântico.
    // Na vida real isso pode ser ".put()" sem problemas.
    return api.patch(`users/${id}`, user, ...rest);
  }
}

export default new UserService();
