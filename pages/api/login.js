import cookie from "cookie"

const handler = (req, res) => {
    if (req.method === "POST") {
        const { username, password } = req.body
        if (username === process.env.REACT_APP_ADMIN_USERNAME && password === process.env.REACT_APP_ADMIN_PASSWORD) {
            res.setHeader("Set-Cookie", cookie.serialize("token", process.env.REACT_APP_TOKEN, {
                maxAge: 60 * 60,
                sameSite: "strict",
                path: "/"
            }))
            res.status(200).json("Succesfull")
        } else {
            res.status(400).json("Wrong credentials")
        }
    }
}

export default handler