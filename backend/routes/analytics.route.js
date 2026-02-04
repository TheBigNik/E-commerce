import express from "express"
import { adminRoute, protectRoute } from "../middleware/auth.middleware"
import { getAnalyticsData } from "../controllers/analytics.controller.js"

const route = express.Router()


route.get("/", protectRoute, adminRoute, async(req,res) => {
    try {
        const analyticsData = await getAnalyticsData()

        const endDate = new Date()
        const startData = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000 )
    } catch (error) {
        
    }
})

export default route