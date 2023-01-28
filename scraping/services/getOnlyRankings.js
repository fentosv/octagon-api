import { logSuccess } from '../lib/log.js'
import timeFormatter from '../lib/timeFormatter.js'
import scrapeRankingsInfo from '../lib/scrapeRankingsInfo.js'

const run = async () => {
  const start = performance.now()

  await scrapeRankingsInfo()

  const end = performance.now()
  const time = timeFormatter(end - start)
  logSuccess(`Task finished in ${time}`)
}

run()