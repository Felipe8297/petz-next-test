import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<String>>
) {
    if (req.method !== 'POST') {
        res.status(405).end()
        return
    }
    if (req.headers['content-type']?.toLowerCase() !== "application/json" && !req.body.hasOwnProperty("date")) {
        res.status(400).end()
        return
    }
    res.status(200).json([
        "10h00m",
        "10h30m",
        "11h00m",
        "11h30m",
        "13h00m",
        "13h30m",
        "14h00m",
        "14h30m",
        "15h00m",
        "15h30m",
        "16h00m",
        "16h30m",
        "17h00m",
        "17h30m",
        "18h00m",
        "18h30m"
    ])
}