const express= require("express");
const router= express.Router()
const locationApi=require("../controllers/location1");
const mealtypeApi=require("../controllers/mealtype");
const getrestApi=require("../controllers/restaurant");
const userApi=require("../controllers/user");
const menuApi= require("../controllers/menuItem");


router.get("/getAllLocations",locationApi.fetchLocations);
router.get("/getAllMealtype",mealtypeApi.getAllMealtype);
router.get("/getAllRest",getrestApi.restApi);

router.post("/postUser",userApi.signup);
router.post("/loginUser",userApi.signin);

router.get("/restBycity/:city",getrestApi.findByCityApi);
router.get("/getMealtypeById/:mealtype_id",getrestApi.findMealtypeById);
router.get("/restById/:_id",getrestApi.findByIdApi);
router.get("/restByLocationId/:location_id",getrestApi.findByLocationIdApi);

router.get("/getAllrestByQuery",getrestApi.getAllRestaurantsByQuery);
router.post("/filter",getrestApi.filter);
router.get('/menu/:name',menuApi.MenuApi);


module.exports=router