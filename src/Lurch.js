import React from "react";

export default () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useLayoutEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 500)
  }, []);

  return (
    <img
      className={`lurch ${isMounted ? 'mounted' : ''}`}
      src="https://res.cloudinary.com/teepublic/image/private/s--c7T9GZy7--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_0195c3,e_outline:48/co_0195c3,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1596143510/production/designs/12657818_0.jpg"
    />
  )
}
