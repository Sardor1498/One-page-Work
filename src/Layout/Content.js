import React from 'react';
import Styles from './Content.module.css';
import Image from '../Assets/Ellipse 10.svg';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Images from '../Assets/Vector.svg';

const text = [
    {
        name: "Дина Неценко",
        age: 26,
        sex: "Женский",
        phone: "8956 030 979",
        email: "dina.netcenko@yandex.ru",
        work: "Место работы",
        workHome: "Аль Пачино",
        experence: "Опыт работы",
        experenceUser: 1,
        education: "Образование",
        educationStreet: "МГУ, Парикмахер-стилист, 2012 г. ",
        educationStreet2: "Повышение квалификации TopGun",
    }
]

const Content = () => {
    return (
        <>
            <div className={Styles.contentDiv + " border border-gray-300 m-5 h-3/4 rounded"}>
                <div className="grid grid-cols-10">
                    <div className="col-span-2 m-5">
                        <span className="text-3xl font-mono font-bold">Профиль</span>
                        <img className="mt-5 mx-10" src={Image} alt="User" />
                    </div>
                    <div className="col-span-4 text-left mt-20">
                        {
                            text.map((item, index) => (
                                <div key={index}>
                                    <span className="font-semibold font-sans text-xl">
                                        {item.name}
                                    </span>
                                    <span className="space-x-4">
                                        <img className="inline-block ml-2" src={Images} alt="Vector" />
                                    </span>
                                    <span className="ml-5 font-semibold font-sans text-xl">
                                        {item.age + " лет"}
                                    </span>
                                    <span className="ml-2 text-yellow-400">
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                    </span>
                                    <div className="text-xs text-gray-400">
                                        {item.sex}
                                    </div>
                                    <div className="text-xl font-semibold">
                                        {item.phone}
                                    </div>
                                    <div className="text-xs text-blue-400">
                                        {item.email}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-span-4 mr-4 mt-10">
                        <div className="hover:shadow-2xl border cursor-pointer p-3 rounded bg-white text-center">
                            <a className="text-lg font-semibold" href="https://youtube.com">
                                Редактировать информацию
                            </a>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                {
                    text.map((item, index) => (
                        <div key={index} className="grid grid-cols-10">
                            <div className="col-span-3 justify-items-center">
                                <div className="mt-6">
                                    <div className="mt-4">
                                        {item.work}
                                    </div>
                                    <div className="mt-4">
                                        {item.experence}
                                    </div>
                                    <div className="mt-4">
                                        {item.education}
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 font-semibold mt-3 text-left">
                                <div className="mt-4">
                                    {item.workHome}
                                </div>
                                <div className="mt-4">
                                    {"От " + item.experenceUser + " года"}
                                </div>
                                <div className="mt-4">
                                    {item.educationStreet}
                                </div>
                                <div>
                                    {item.educationStreet2}
                                </div>
                            </div>
                            <div className="col-span-4"></div>
                        </div>
                    ))
                }
                <div className={Styles.buttonDiv + " flex justify-center w-1/6 hover:shadow-2xl hover:border-green-500 border cursor-pointer rounded-xl pt-3 pb-3 text-center"}>
                    <button type="button" className="font-semibold">
                        Портфолио
                    </button>
                </div>
            </div>
        </>
    )
}
export default Content;