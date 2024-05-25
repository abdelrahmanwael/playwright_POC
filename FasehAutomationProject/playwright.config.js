import { defineConfig } from '@playwright/test';

const config ={
    testDir: 'POM',
    //timeout: 80000,
    reporter: [
        ['html', {
          outputFile: 'test-results.html',
        }],
      ],
      expect: {
        timeout: 7000,
      },
      timeout: 60*60*2*1000, //General timeout for the whole run is 2hrs
      retries: 0, //retry TC upon failure
    
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'only-on-failure',
        actionTimeout:120000, 
        navigationTimeout:60000,

        
    }
}

export default config;