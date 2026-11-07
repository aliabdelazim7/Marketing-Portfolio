import http from 'http';
import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('🧪 ALI ABDELAZIM PORTFOLIO — AUTOMATED TEST SUITE');
console.log('   Framework: ISO 25010 & ISTQB Quality Standards');
console.log('====================================================\n');

const results = {
  total: 0,
  passed: 0,
  failed: 0,
  tests: []
};

function assertTest(name, condition, details = '') {
  results.total++;
  if (condition) {
    results.passed++;
    console.log(`  ✅ PASS: ${name}`);
    results.tests.push({ name, status: 'PASS', details });
  } else {
    results.failed++;
    console.error(`  ❌ FAIL: ${name} — ${details}`);
    results.tests.push({ name, status: 'FAIL', details });
  }
}

// 1. Static Asset & Structure Validation
console.log('📦 1. Testing Core Files & Asset Integrity:');
const requiredFiles = [
  'index.html',
  'package.json',
  'tsconfig.json',
  'tailwind.config.js',
  'netlify.toml',
  'README.md',
  'design-research.md',
  'dist/index.html',
  'public/favicon.svg',
  'public/results/hassan-elhout.png',
  'public/results/devora.png',
  'public/results/heba-bales.png',
  'public/results/pixelmind.png',
  'public/results/honaijel-cameras.png',
  'public/results/google-ads-scale.png',
  'public/results/salla-ecommerce.png',
  'public/results/shopify-usd-scale.png',
  'public/results/google-ads-q4.png'
];

requiredFiles.forEach(file => {
  const exists = fs.existsSync(file);
  assertTest(`File exists: ${file}`, exists, exists ? '' : `Missing required file ${file}`);
});

// 2. Unit Economics Simulator Math Integrity Test
console.log('\n🧮 2. Testing Unit Economics Mathematical Logic:');
function calculateUnitEconomics(budget, aov, convRate, targetRoas) {
  const projectedRevenue = Math.round(budget * targetRoas);
  const requiredOrders = Math.round(projectedRevenue / (aov || 1));
  const allowableCpa = (budget / (requiredOrders || 1)).toFixed(2);
  const requiredCpc = ((budget / (requiredOrders || 1)) * (convRate / 100)).toFixed(2);
  const contributionSurplus = projectedRevenue - budget;
  return { projectedRevenue, requiredOrders, allowableCpa, requiredCpc, contributionSurplus };
}

const mathRun1 = calculateUnitEconomics(10000, 85, 2.4, 3.5);
assertTest('Calculator: Projected Revenue ($10k @ 3.5x)', mathRun1.projectedRevenue === 35000, `Got ${mathRun1.projectedRevenue}`);
assertTest('Calculator: Required Orders ($35k / $85)', mathRun1.requiredOrders === 412, `Got ${mathRun1.requiredOrders}`);
assertTest('Calculator: Allowable Target CPA', mathRun1.allowableCpa === '24.27', `Got ${mathRun1.allowableCpa}`);
assertTest('Calculator: Allowable Outbound CPC', mathRun1.requiredCpc === '0.58', `Got ${mathRun1.requiredCpc}`);
assertTest('Calculator: Contribution Surplus ($35k - $10k)', mathRun1.contributionSurplus === 25000, `Got ${mathRun1.contributionSurplus}`);

// 3. Contact & Phone / Email Format Integrity
console.log('\n📫 3. Testing Contact Channels & Credentials:');
const contentFile = fs.readFileSync('src/data/content.ts', 'utf8');
assertTest('Email credential check', contentFile.includes('ali.performance.ads@gmail.com'));
assertTest('Phone number check', contentFile.includes('+20 155 322 4824'));
assertTest('WhatsApp link check', contentFile.includes('201553224824'));

// 4. HTTP Live Server Health & Status 200
console.log('\n🌐 4. Testing Live HTTP Server Response:');
function testHttp(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, data }));
    }).on('error', (err) => resolve({ statusCode: 500, error: err.message }));
  });
}

(async () => {
  const serverCheck = await testHttp('http://localhost:4173/');
  assertTest('HTTP Status 200 on /', serverCheck.statusCode === 200, `Status: ${serverCheck.statusCode}`);
  assertTest('HTML contains viewport tag', serverCheck.data?.includes('width=device-width'), 'Missing viewport meta');
  assertTest('HTML contains Alexandria font', serverCheck.data?.includes('family=Alexandria'), 'Missing Alexandria font');

  const assetCheck = await testHttp('http://localhost:4173/results/hassan-elhout.png');
  assertTest('Asset HTTP Status 200: /results/hassan-elhout.png', assetCheck.statusCode === 200, `Status: ${assetCheck.statusCode}`);

  console.log('\n====================================================');
  console.log(`📊 TEST EXECUTION SUMMARY:`);
  console.log(`   Total Tests: ${results.total}`);
  console.log(`   Passed:      ${results.passed}`);
  console.log(`   Failed:      ${results.failed}`);
  console.log(`   Success Rate: ${((results.passed / results.total) * 100).toFixed(1)}%`);
  console.log('====================================================\n');

  if (results.failed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
})();
