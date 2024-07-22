import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
export enum PATHS {
    ABOUT = '/about',
    PRICING = '/pricing',
    CONTACT = '/contact'

}
interface Routes {
    path: PATHS,
    text: string
}
const nevItems: Routes[] = [
    {
        path: PATHS.ABOUT,
        text: 'about'
    },
    {
        path: PATHS.PRICING,
        text: 'pricing'
    },
    {
        path: PATHS.CONTACT,
        text: 'contact'
    }

]
export const Navbar = async () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href='/' className="flex items-center ">
                <HomeIcon className="mr-2" />

                <span>Home</span>
            </Link>
            <div className="flex flex-1">
            </div>
            {
                nevItems.map(({ path, text }) => (
                    <Link key={path} href={path} className="mr-2">{text}</Link>
                ))
            }

        </nav>
    )
}
