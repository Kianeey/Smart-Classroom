import Image from "next/image"
import Link from "next/link"
function Login () {
    return <div className="flex flex-col justify-center min-h-dvh bg-[#fcfcf7]">
        <Image src="/login-icon.png" alt="login icon" width={40} height={80} className="mx-auto"/>
        <p className="text-center p-4 text-2xl text font-semibold text-[#4a4e69]">Administrator Login</p>
        <form className="flex flex-col w-[28.125rem] mx-auto mt-4 gap-4">
            <label htmlFor="email" className="text-sm font-medium text-[#4a4e69]">
                <span>Email</span>
                <input type="email" id ="email" className="border-2 border-[#4a4e69] rounded-lg p-2 block w-[28.125rem]"/>
            </label>
            <label htmlFor="password" className="text-sm font-medium text-[#4a4e69]">
                <span>Password</span>
                <input type="password" id ="password" className="border-2 border-[#4a4e69] rounded-lg p-2 block w-[28.125rem]"/>
            </label>
            <Link href={""} className="text-end text-[#4a4e69] text-sm font-medium">Forgot password?</Link>
            <button type="submit" className="w-fit py-2 px-16 mx-auto rounded-lg bg-[#4a4e69] text-white">Login</button>

         </form>
        </div>
}
export default Login;