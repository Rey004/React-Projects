import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = React.useState({})

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Rey004')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Rey004')
    return response.json()
}