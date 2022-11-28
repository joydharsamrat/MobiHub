import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isVerified, setIsVerified] = useState('')
    const [isSellerLoading, setIsSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://mobihub-server.vercel.app/users/seller/${email}`, {
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