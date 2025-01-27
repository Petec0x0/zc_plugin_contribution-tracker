import http from "../http-client";

class ContributionServices {
    getVoters() {
        return http.get("/admin/voters/?org_id=614679ee1a5607b13c00bcb7")
    }
    getUser(id) {
        return http.get(`/voter/${id}`)
    }
    getUsers() {
        return http.get("/voters")
    }
    getAllUsers() {
        return http.get("/users") // This simply serves as an example.
    }
    addUser(data) {
        return http.post("/voters", data)
    }
    getTicket() {
        return http.get("/ticket")
    }
    addTicket(data) {
        console.log(data)
        return http.post("/ticket", data)
    }

    // Request feature endpoint not yet available

    // addFeature(data) {
    //     return http.post("/", data)
    // }

    // getAllFeatures() {
    //     return http.get("/")
    // }
}

export default new ContributionServices();