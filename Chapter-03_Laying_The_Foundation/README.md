# Namaste React

# Parcel
- DevBuild
-Local Server
-HMR = Hot Module Replacement
-File watching algorithm = written in c++
-Faster build - because of caching
-Image Optimization
-Minification of file
-Bundling
-Compress File
-Consistent hashing
-Code spliting
-Differential Bundling - to support older browsers
-Diagnostic
-Error Handling
-We can also host it in https (i.e. npx parcel index.html --https)
-Tree Shaking - remove unused code for us
-Different dev and production bundles

# JSX
- JSX is a JavaScript syntax that looks similar to HTML or XML(But not a HTML).
- Before reaching the JavaScript engine, JSX code is transpiled by Parcel using Babel.
- Babel transpiles JSX into a `React.createElement`, which is then converted to a React element (i.e is nothing but a JavaScript object),  and  finally, React renders this React element into an HTML element.
-  the console.log(heading) & console.log(jsxheading) is one of the samething both are JavaScripts objects
- In JSX we can do nesting