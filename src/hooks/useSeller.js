import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(null);
    const [isVerified, setIsVerified] = useState(false)
    const [isSellerLoading, setIsSellerLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/seller/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller)
                    setIsVerified(data.isVerified)
                    setIsSellerLoading(false)
                })
        }
    }, [email])
    return [isSeller, isSellerLoading, isVerified]
}

export default useSeller;