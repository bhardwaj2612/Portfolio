
import { FaReact, FaBootstrap, FaNode, FaGithub, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMysql, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaC } from "react-icons/fa6";
import { BsFiletypeSql } from "react-icons/bs";
const Tools = () => {
    return <>
        <section  >
            <div className="card mb-3 container" id="tools">
                <div className="card-header">
                    <h2>Tools</h2>
                </div>
                <div className="row mt-2" >
                    <div className="col  box">
                        <FaReact className="icons" />
                        <h5 className=" mt-3">React</h5>
                    </div>
                    <div className="col box">
                        <span className="icons" >Next</span>
                        <h5 className="mt-3">Next.Js</h5>
                    </div>
                    <div className="col box">
                        < IoLogoJavascript className="icons" />
                        <h5 className="mt-3">Javascript</h5>
                    </div>
                    <div className="col box box1">
                        <SiRedux className="icons" />
                        <h5 className="mt-3 ">Redux</h5>
                    </div>

                </div>
                <div className="row ">
                    <div className="col  box">
                        <FaNode className="icons" />
                        <h5 className=" mt-3">Node.js</h5>
                    </div>
                    <div className="col box">
                        <span className="icons" >API </span>
                        <h5 className=" mt-3">API</h5>
                    </div>
                    <div className="col box">
                        <SiExpress className="icons" />
                        <h5 className=" mt-3">Express.js</h5>
                    </div>
                    <div className="col box box1">
                        < FaCss3Alt className="icons" />
                        <h5 className=" mt-3">CSS</h5>
                    </div>

                </div>
                <div className="row ">
                    <div className="col  box">
                        <FaHtml5 className="icons" />
                        <h5 className=" mt-3">HTML</h5>
                    </div>
                    <div className="col box">
                        < FaBootstrap className="icons" />
                        <h5 className=" mt-3">Bootstrap</h5>
                    </div>
                    <div className="col box">
                        <BsFiletypeSql className="icons" />
                        <h5 className=" mt-3">Sql</h5>
                    </div>
                    <div className="col box box1">
                        <SiMysql className="icons" />
                        <h5 className=" mt-3">MySql</h5>
                    </div>

                </div>
                <div className="row ">
                    <div className="col  box">
                        <FaGithub className="icons" />
                        <h5 className=" mt-3">GitHub</h5>
                    </div>
                    <div className="col box">
                        <SiTypescript className="icons" />
                        <h5 className=" mt-3">TypeScript</h5>
                    </div>
                    <div className="col box">
                        <TbBrandCpp className="icons" />
                        <h5 className=" mt-3">C++</h5>
                    </div>
                    <div className="col box box1">
                        <FaC className="icons" />
                        <h5 className=" mt-3">C Language </h5>
                    </div>

                </div>

            </div>

        </section>
    </>
}

export default Tools