const API_MODE = "local"

const URL = {
    public: "https://dummyjson.com/products?limit=20",
    local: "/data/products.json"
}

export const BASE_URL = URL[API_MODE]