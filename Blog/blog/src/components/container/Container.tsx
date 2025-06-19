



//container genrally used to accept property as children here only styling property are define just like outlet
export default function conatiner({children}){

    return(

        <>


        <div className="w-full max-w-7xl mx-auto px-4">

            {children}


        </div>
        
        
        </>


    )
}