//without a defined matcher, this one line applies next auth to all routes
export {default} from "next-auth/middleware"

//matcher
export const config = { matcher: ["/protected","/info"]}