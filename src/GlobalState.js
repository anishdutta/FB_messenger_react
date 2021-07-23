import {atom } from "recoil"

const access_token = atom({
    key:"accesstoken",
    default:"",
});

const uid  = atom({
    key:"uid",
    default:""
})

export {access_token,uid}