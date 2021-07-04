import React from 'react';
import Image from '../Assets/Ellipse 10.svg';

const services = [
    {
        name: "Профиль",
        url: "#",
        icon: ">",
    },
    {
        name: "Сообщение",
        url: "#",
        icon: ">",
    },
    {
        name: "Услуги",
        url: "#",
        icon: ">",
    },
    {
        name: "Добавить график работы",
        url: "#",
        icon: ">",
    },
    {
        name: "Записать клиента",
        url: "#",
        icon: ">",
    },
    {
        name: "Просмотр записей",
        url: "#",
        icon: ">",
    },
    {
        name: "Клиентская база",
        url: "#",
        icon: ">",
    },
    {
        name: "Уведомления",
        url: "#",
        icon: ">",
    },
    {
        name: "Тарифы",
        url: "#",
        icon: ">",
    },
    {
        name: "Отзывы",
        url: "#",
        icon: ">",
    },
]

const SideBar = () => {
    return (
        <>
            <div className="grid grid-cols-3">
                <div className="col-span-1 w-14 h-14 mt-10 ml-10">
                    <img src={Image} alt="User" />
                </div>
                <div className="col-span-2 mt-12 mr-28">
                    <h1 className="text-gray-400 text-xs font-mono">
                        Ваш аккаунт
                    </h1>
                    <h1 className="font-sans text-lg text-white">
                        Базовый
                    </h1>
                </div>
            </div>
            <div className="mx-10 my-10">
                {
                    services.map((item, index) => (
                        <div key={index} className="grid mt-5 grid-cols-12 hover:text-yellow-700 cursor-pointer text-white text-xl bg-transparent">
                            <div className="col-span-9 text-left bg-transparent">
                                <a href={item.url}>{item.name}</a>
                            </div>
                            <div className="col-span-3">
                                <a className="text-gray-400 text-xs" href={item.url}>{item.icon}</a>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}
export default SideBar;



