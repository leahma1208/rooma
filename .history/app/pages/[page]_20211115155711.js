import {useRouter} from 'next/router'
export default function Home (){

    const router = useRouter();
    const {page} = router.query
    return <div>
        
    </div>
}