function Button({

    children,
    type='button',
    bgcolor='bg-blue-600',
    textcolor='text-white',
    className=" ",
    ...props


}){

    return(
        <button  classname={`px-4 py-2 rounded-lg ${className} ${textcolor}  ${bgcolor}`}  {...props}>{children}  </button>
    )
}