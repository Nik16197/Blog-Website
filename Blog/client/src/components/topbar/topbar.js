import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';
import "./topbar.css";

function Topbar() {

    const { user, dispatch } = useContext(Context)

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="toplistItem">
                        <Link to="/" className='link' >HOME</Link>
                    </li>
                    <li className="toplistItem">
                        <Link to="/" className='link' >ABOUT</Link>
                    </li>
                    <li className="toplistItem">
                        <Link to="/" className='link' >CONTACT</Link>
                    </li>
                    <li className="toplistItem">
                        <Link to="/write" className='link' >WRITE</Link>
                    </li>
                    <li className="toplistItem" onClick={handleLogout}>

                        {user && "LOGOUT"}

                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                            className='topImage'
                            src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEA8QEA8VFRAPFQ0QEBAVDw8PDw8PFRUXFhUVFRUYHSggGBolGxUVITEhJSktLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICYrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTUtLf/AABEIAT4AnwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIEBQYDB//EAEcQAAIBAgMFBQUEBwYDCQAAAAECAAMRBBIhBTFBUWEGEyKBkTJxobHBI0JS0QcUYnKisvAVJDOCkuFDU8I0Y3SDk5TS0/H/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALxEAAgIBAgMGBgIDAQAAAAAAAAECEQMhMQQSYRNBUXGh8CKBkbHB0ULxBTLhM//aAAwDAQACEQMRAD8AsYQhAFiRYQAiRYkAIhbd1iyFXxPjROZv8P8AeZ5cnJGzo4Xh3nyci9933aJphKv+0L2tysRyZWP5SdhcQH+fvU7jIjmjKXKi2ThMkIc7Wmvyppfd+q8TvEixJqcosIkIARYkLwAixIQBYQhAEhCEAWJCEAIRCZUnaZZa5HNUToCLX+spPJGH+xthwTyv4F4err/vlZNfGAMRb2SF95tr6SBW8VZCOZ9NBOYGUC/EZiepnXCsAWc7lBPoL/X4TzMmZ5NGfScNwkOHdx30v5f16kHDLYMetRif8xM7YOvkLka91VKsOOVlDW9WHpOLtkoOeOUAe9iB9YmHqjPiRzakfPKv5St18XX7UaSgpJQfeq+ql+i4wu0g7ZStjYHf5ESdmmUarlqqfxBPqpi1toOS65txUj/Lax9+70nTDi3Xxanm5/8AGRf/AJuvH39TVwlfsnaAqrZvbWwbrfcfpLCdsZKStHjZIShJxlughCEsUCEIQAhCEAIQhACIzAC5gxsCTuGpPSUG0dpEmy+X7I/Eep+ExzZljXU6+E4V55eCW7/C6skbTx12yqdEvfq1t0hYZdAOZuZBL7hzkug9tT90EzysmRzlzM+k4fFHFBQj3evU6Yyv4iOG7yE5Vq9qVuNQ28ibmQne598Y75n6U9PPjIRaU/fvoLtOv4MnNqP84P8A0x2HreOt1I+AkHEPd1H7S/wgn6x2FbxOebXlmvh99DDn+P09H+yXin9ny+Y/ORWqEOeRCfUfSLXfVfL5ic2awJ/dkxVISlbZLwuJyOrXtrZvcd/5+U2ODxIqIGHUN0YbxPPq9WxPuv5iT9nbWaiGUffsQfwkcfSdOCfJvsefxmHtdt0bRcSpc0wfEBc9P6vO0y/ZnFKzVHZvEdBvNxxPrNQDOzHNyVs8vPiWOVLbx8X30EIQmhiEBFiQBYRruBvP1lftDaSohynxHQaEWPOUlkjHdm0OHyTqkzltrGbqQPV/oPr6Shqvec3rceJjC08rLN5JczPo8GOOHGoL59WORtb8p0qVNLc9TOCtb3CcqlTTq2kpy2y7nSH97YFvT6RqHKtz1J68TGVXtYcvnOOIfQDnYeW8y6iZudaiI3iBPAOx89PoY7CNoepnBn9rrZR5f73jUxFrAankNTNHFvYw56epIr1PGOkbUbwn3Wkbx3JKHjy1jWreyCCNwNxoPOW7N+BHbRbepZqgIN+R+UrRUBZRyteTFrg35XlSabd6VA058BGNXZGeVVRuNk2ymyi1zbTUDTjLnC17G3A8+EyuHrtRyWPhOnNb9eUtMNjgWGYWB3jlM2nGXMmdalDJjeOS81+jSQiAaRZ6x8qEWJCAIReUHaZPCuUEsLk2F7KOJ6TQSk2ljshZV9pybnTRRplHz85lmklHU6uEhJ5Ljv73970jKGre3Q/SOarYRm06OQ5l3HeOPlzkF61xODks9lzq0ywep4QOesaX3nloJ22RsfE4zKaNIldRnPhS4Otid/lNPhP0dVWt3tYL0XU+sjlS3IeRGKFW5PT5x9HD1KrDIpPAHh6/1unqOA/R5hk9q7HrumgwWwaFK2SmLjcTrLJpbGLnoeZ7J7B1qtjUNhy1HrNtsnsdQoAXQM3Uaek0OIr06QBqVFQcLsF9Ocq8R2nwqaZ2b91Db1NpVybKrXVHV9j0f+Un+hZRbT7J0KgNky34gS6wnaDD1jYPlJ3Bxlv57vjJlVZW2i1XueO7d7KVMKQ9M5qdxccV8pEwOEYXV11qFipG8aagz1faeFFRHU/eBHnMBjsQtN8Om5y6qefd6hj8ZdZHZtixRptvb8jRQDUnRhqqEi/NSLfBh6SCpKuAxvotSmfxUj9RY/CTKuLDByP+8t1Urb5iVtOpm/U142qJ1tcW+cqrao3k1Fp+91+zf0T4V6hflHRtMWUDkAPQR09Y+WbFiRYkAJk6lF61Zgv4m14AA7zNZIlDCCn3hH3yxmOWHNXgjq4bN2XN4uq/PoZ6rh1N132FgTvJlZgNijEYtKOoDuoY33JbM3nlBljUxAGUEb2Yn3hSB8QZY9kCv65h9RcrVPnkM8+De57+eMVGvD+vyel4TDLTVURQqKAqqBYKoFgAJ0qVVQFmYKo3sSFA8zK/a+PalTHdLmquctNd4Lcz0A1lVQ2A1UipjKxqNv7sGyL0/wDy0pZxctl/gtpU69zSuyroXykITyBO/wApKLyJTyooVQAq6AAWAEf3kcxHIcMVsuhVYtUpKzHibk/ONTZtBfZoU/8AQp+c6Vatple0HbSnhmNKmpq19xRTop5M3PoLn3SYqUnSJk4wVydGnq4akdDSQ/5F/KMo0wgyqTl4KSTl9xPDpPPz2i2nU1WlSQcAQCfO7Xnal2xxVD/teEBTjUpm1viV+ImnYy7q+pTtordP6OjbVhMf2l2Qp+2A8SEN06/nNHs3alLFU+8ovmXceDI3JhwM47RS4IO43B90ok1obKS0a17zy+vcU7Lv+nGcMEzCth14U6tEDpmdbg+hk/aVE061VPu+0n7pH5gjyjOy9LvsQPD4UY1mPAW1Uevym2JPmrqVzyjyX0fv6m/hCE9E8IWJCEAIRYkAyO3sL3dQ/hY51PC/EevzjOzOIyY3Ck7i7U/9SOB8SJqNo4Fa6FG47m4qecwOMSphHAbfSZHRt/iUhlPUaCcE8PJLTZns4eLWXG1LdLX5d/76npXabtTRwbKuU1cSVISiu9Q3Fj929hzJ5TPHtHtWocyUaSLwUrdvO7fQTn2Z2aWX9Zq+LEYtmfMdSqE8OV/lYTb4PZ6qN2so+SGiV9X72EIzmuZtpdyXh1uzH0O2eJokDG4eynTvE0HzI+Im12ZtFK6K9NgytuI+R5HpGY3Y6VVKsoIIIIIuCJhqCvsjGpTJP6piTZb38DXA+Fx5HpKuMZr4VT9GTcsf+zuL+q/Zo+3O2WwtC1M/bVz3dK29fxMOoFgOrCVHZbs6FAJF3b233kk7wDy+c59s373aGAp8AhcfvFm/+tZtdn0CiIqAF3KogO7MeJ6DeegMsrjBJd+v6I0c5Sl/HRdNLYxNmU1Avbz0jK+yVINhv9CJD7Sdo6GAd6SUqVRqbCnWxWIptVLViCSlNF3AWOg0FjpoTF2RtZcQgqUkRWszgUSRh8Qi/wCIopn2KgGvW2shwrv6dL8L2sLLLdrTfdXXjW9GP2nhH2VXXFUAe5YhK1L7tjw93LkehtNbUxS1KauhurgMp5qRcGT9ubOXE0KicKiMFPUi6nyNjPJdn4fF4mgi0nbu0LqVNXIm4NYi+vtGXiu0Vt0139DKUuylUVafcu595Y9pMUha2YXs6kXuen1lZ2b21+p9/mQv3nd5AGCgFc17nzHpCr2dq0gWfJZdSFYk29JpdidlqKKK2KXMWsUpXORQd1/xMeW4TVSx49bspyZ86UapFnsXH/rNBKuXKWLgqDmsVYjf5D1k6PpYNKdP7KmETVsoUKNd5sIybYsqyK0c3EcNLBLlkEWJCanOEWJCAEzPbqgpo03t4g6pf9khjY+Ymmme7ZYB6tLOh0ohnZbncLagc7ZpDFtbGg2EQwpW9ladNR0sAPpNNRpNUenSQ2aoTdrA5EUXZrHedwHVhMV+j6oWpkE3sSV/dOoHlqPKb/ZJC4ikx3Za1O/C7ZSP5Lec81Jdokz2skn2Nx8DL9vdq0cEXo0qQHcrTNbEFe9xJd7ZVR2Oh1BJvx4TI7S2mu0dnVjmLVMKyVFZlC1BY2YNbQ+BmII32PETb/pL7GHFs1VQxWp3bMUsalKqi5QwU+0pXQjfMZW7OHBbOxRGaxCtUquvdmox+zSmibwLvfXmZrJ1NXd2q00qznhTx6Vy8rt/y5ve3dRnsLjKxr4XEV2LKGRVckGyEnTpvJnt+yiBUw7H2QxueALIyj4sJgtl7BXE7IVCLPUValJyNzDVT7jqPcTLXsH2gFVP1TEeHFULoyNYGoo0uOZ5jz3GRKVvmX8X6XoWWPljyvaS361qvyvmUv6QuyNdq9RVchatarXpZs/c1u8Jaxyg2qKWZRpuY85cdiezFTBUqYZ1z56lZ9CfG1PuwqjSwA1JO88JsDac2rIvGZSm3SvRO15/TrtsaRxLdr4qpvXaq22uiNVZaNLU+GkpJJ/Co1PoJ5t2RUrhA50NV6j26aL81Muu2u3RiL4DCHM9TSvUGq0qfFb8zuPTTeY/A7PyoigWVFCqOg59ZZrljr3/AGNMceedrZKvm6+yWpBxJvoRcHQjmJc7NwpqOpYDuwBl132HL+t0qsclpdbLq2VL/d185nLY2impNFpj7LTPnKOS8biS5tw4yJOvhIOMW/E83/IZE5qC7t/NhAQhOs88IQhACBFxY6g6EcxCEAz+xK42XijTqX/Vax+yqbwh35D1HxGvOelYeqtQAggqdxBBUjpMjXoLUUpUQMjb1YXBlfQ7MVqeuDxlWkp1yH7RPj9bzj4jHG7urPR4TJKUXFK68r9dPXQ9EKgamwA1JJ0AnnnajaX9q1qeAwnjooyviay3yG2lg3Ia68Ta2687N2RxOI0xWPqVE/ABkQ+8XI+E02ysJR2fTFNaJRd5dVNQOebMNb++YJxhqtX6eZu4TyaNUvC9X002B8VZcqobIAFQLbQDQLfSVW0eyC40942alVULkqLo4I587TQHalM7kqN/5TD4m05Pj67aU6SoPxVGufflX85lHmi7TOmfxR5XGl1MnicFtbCqbYxHpr96ogBA6kg/OQBszGYn/HxLKp3pTplCR7za3pN1RwniD1nNRxqL27tD+yg0B675LJHKa9q+n0Rh2cUq1fzdfe/qZvYXZ2nQWypYbzxZjzJ4yyxSADSTatUCVmLrX0EzbcnqawaiqKPGLmYDmRJai26IU1vxizuwY1y3JHncVxEueoNrydAIQhOk4QhCEAIQgYAQhCALJ2BxNhlPl+UgQlMmNTVM1w5XilzIvqeJE6VMTfjKJaxHX5x36x7/AJzhlw813WelHi8Ut3XmWD1LcYgr9ZCNUHjG/wCb4zJ45LdHTDJjls19SwOKnM4yQbjnEFUDdEYtuiJyUVbJVStfedJGqVb7v95zZr74k78eBR1Z5WbipT0joghCE3OUIQhACEIQAhCEAIQhACEIQAhCEAIqIWIAFyeAFzEJm47PbGFGmHZftXALX+4DuUcuvWQ2SlZkF2BWI9t/9Kzg+znoE5s5DW1YDKOgsBaen5JwxFAOCGAIOhHCYRiou0bTySkqbPNYSx23gO4qWX2GuV6cxK6bpmAQhCSAhFiQAhCEAIQiwBIQhACEIQAhCKqkkAbyQBuGp3QC17NbO7+sLj7OlZ35E/dXzI9AZvUa97cDY++Q9ibNGHoqgN2Pidh95jy6cB7pIwKnKSd7NVb/ACl2K/w5Zm3bLI7NIi1gXycSGYe4EA/zCSqgkCilsQD+xVX1KH/pkElN2toXphvwEHyOn1mTnoW28NnpVFA1Km3v4fGeey8SrCEISxAQhCAEIQgBFiQgBCEIAQhCAEIsQwDTbAWolEutVhfNlW+anYaeyet91prcOmVVX8IVfQWlJhKOUUKfLIPfl1PyM0CicuKTk2+p0ZYqKiugxxKfal/CVYqcy6qbGxNjr5y5eVm0ad1J5a+msvLYzjujNdocNlVXDvcEAk1ahJv7zKK81W3RegfI/GZSV4Z3F+ZrxSqS8ghCE6TmCEIQBYRIQBYkDAQAhFiQAixIQAnfA081WmvNlv7gbn4CcJJ2biKdOshqVEQAVCC7qgNhrvPIys3UW+haCuSXU22B8VYckUk9CTYfDN6S6mG2F272cWqo2JVGzHx1FanSdRoMtQi1t++28zQHtbs+1/7Rwtv/ABdD/wCUxxRajRrmknNlu0hY1fCfOV1Tttswb9pYX/3NE/Iyn2p+krZiAhMT3zfho03qfx2CfxS9GR32i2bDX5qPlMvJ+B7TYbF0CKdQBz3n2LWWqq3NtOOltRcSCu70mXDqnJeR08S04xa6/hiQixJ1HIEIsSAEIsIAkWJCALCJCAEIsSAEyXbqmb0H+79ovQNofiL+k1spu1uH7zCuRvplag8tG/hJ9IBhM05uqneAfK8csRxKljmET8I9BOqC27/aNwmHV6eJqH2qJwmXU6BzUDC247l9PfHoJJCGufhN32MLHCKXJN3q5SSSct7fMNMDVNhPUdmYbuaNKmPuIqnq1vEfW5hBkmEIskgIkIQAhFiGALEixIAsSEIAsSEWAJG1KYYFWF1YFWHNSLER0WAeW4vDGlUqUzvpsy35gbj5ix85yqbpadpj/e6/vp/yLKqodJBY7bLH93xx/a2eP4qpjJ22Yf7rjF4mrgtOJ0q/kfScsp5GAiLWNtZ66DfXnPJK66G4nqGyaufD0G/FSonzyiEQyXCEJJAQhCAEIRYAkIQgBCEIAQixIAQhFgFJjOzdOq7PnYFyWIsrC5320kPEdl1X/in/ANNfzmrwqZnUHddLndYFgPmQPeRJG2cB3alr+Hj0nLnyOLSR2cLijNPmMzgezNCmHBDPnKE5msAUzBbZbW9tvWdm2Bhza1Pn/wASp+csxLHYqqXOYrewCqxUFudr77W+M3y3yutznw1zq9jIv2aoFiCHA4Wf8wZb4PDLRppTW+VBlFzc26mW+31pqVOdUYkWUFS7nkFHDmeAuZXSuFvl+IvxCipXHYIQhNTAIQhACEIQAhCEAIsSF4AQiXhmgCwEbmheASqCmyZSFdqgQMwujXUkLxHtAa2OrLH7WpY0rbLSB4OH8KHg3iB3e4HlJ2wsJUqgtYBEuUZqatqT4srEabhE2vQYKdep6nd/XnznPPWRtDI4xpFP/Wl7SVgMEtZsrsVXRQe7Sqhc6hWRwQQQrem+Q80lbLrEVUAJGYhTrvB5zaS0ozhJxaaO21uz64elUqhywRWfu6dCjhUfLrZyo1HS8i16RRipIuLXtwJANvjNFtXDB6ZNRGqKBqpc5TbmvGZqpVLMWO9iWPvJvKY67i2Scpu5CRY3NDNNTMdEiXi3gBCEIA28TNG3jSYA+8TNGEzmXgHbNOuFw1SsctNCxG+24e87hOGATvaqUyQAxF7sqaDUgE6XI0F+Np6dg6K00Cph3VRuFqZ8yQxuet5VsmjG0OzlU61CFHIG7eo0EnUdkUaTJnOZibDNexO/S2nrLfaG01p6MuThepVoU1/mJ+EqHx7tfIpPRadRwR0qPkU/GZyci3KiwTFaAIMqjMN2Rgei2t+fzgY11ACs2tgBmIzNbpxMqsdtSnSJFfEIhGuQ1Gq1bcjSo5T8TK2p2qwyXFNa73/AlPCoT+8LP63leVsm0c6xyswII1NgQVNuBsdRpJuwVz4ikBwJY+5QTMtjdsGpULrSFNSB4c5qEn8TMQLnd6TQ9h8QlWpU+0QVhkFJDU7qs175jTJBVv3SCDpe2+bdxRVZ6KbEFGA1sASfb04AazI7W2M4dmpKTc3KWFxfkcx48Os0VPFG+Sqp0sSQrK4AI9pQTpuBZSy7723SbQwy1FVswdTqr+FlI3eG2gGnCZRtMs0eavdTZgQeRBB9DAPPQMfsOnUXKyDjYjQqehEw+2dmNhmGt0b2Tx9xmydlaOAeOvIytOqmSQdQYoMaIQBDGkR9oWgHIiMKTuRG2gHLCu9GoKtNrOMw1VXUqRYgqRYgyeduVOOEwJPM4M3+FSRSsS0A6vtvFa5O4pX/AOVhlU/xFhK3FNXrf4uJquOK58iH3ollPpJhES0igVVPZqruUDytH/qY5SyyQySQVRwY5SPW2YG0I+EvMsMkA57G27Xwtkq5q+HBuELkV6J/FRqXuDYnw3tyI1mx2ftvD1Dmp4mnna10rVG2fiC37TqMtXhuU+8zJd0I3uRykNEp0eknEVCNGcjmtXBOvqygzI9rMTdbO6lhqqtXR6t92lKmoXn4julEMJT3mmv+lZ3SkBuAHkBI5RZFoMTwklY8LHASxACFooEcBAP/2Q=='
                            alt=''
                        />
                    ) : (
                        <ul className="topList">
                            <li className="toplistItem">
                                <Link to="/login" className='link' >LOGIN</Link>
                            </li>
                            <li className="toplistItem">
                                <Link to="/register" className='link' >REGISTER</Link>
                            </li>
                        </ul>
                    )
                }

                <i className="searchIcon fab fa-searchengin"></i>
            </div>

        </div>
    );
}

export default Topbar;