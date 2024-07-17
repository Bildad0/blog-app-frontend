import { toast } from "react-toastify"



function Error() {
    return toast.error("Not Found", {
        icon: false
    })
}


export default Error