//Scenario 01;
import { test, expect } from '@playwright/test';


test('Pos_Fun_0001 - Convert short greeting with question', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('neenga eppadi irukkeengal?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});


//Scenario 02;

test('Pos_Fun_0002 - Convert simple present tense statement', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan veetukku poren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 03;

test('Pos_Fun_0003 - Convert polite request form', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('enakku  uthavi  pannuveengal? ');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 04;

test('Pos_Fun_0004 - Convert past tense narrative', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan nettru school poinen');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 05;

test('Pos_Fun_0005 - Convert future tense with time reference', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan naalaikku varuven');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 06;

test('Pos_Fun_0006 - Convert imperative command', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('seekiram vaa');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 07;

test('Pos_Fun_0007 - Convert compound sentence with conjunction', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan saapadu saapten aana enakku pasikala');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 08;

test('Pos_Fun_0008 - Excessive spacing between words', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan          veetukku          poren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 09;

test('Pos_Fun_0009 - Convert negative sentence form', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan varala');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 10;

test('Pos_Fun_0010 - Convert plural pronoun usage', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naanga naalaikku varuvom');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 11;

test('Pos_Fun_0011 - Convert second-person pronoun variation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('nee enna panra?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 12;

test('Pos_Fun_0012 - Convert repeated word for emphasis', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('romba romba nandri');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 13;

test('Pos_Fun_0013 - Convert multi-word collocation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('konjam poi paaru');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 14;

test('Pos_Fun_0014 - Convert mixed English technical terms', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('enakku Zoom meeting-la connect panna mudiyala');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 15;

test('Pos_Fun_0015 - Convert sentence with place names', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan Chennai-lerundhu Bangalore poitu vandhen');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 16;

test('Pos_Fun_0016 - Convert with English abbreviations', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('enakku ID card venum');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 17;

test('Pos_Fun_0017 - Convert with punctuation marks', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('wow! romba azhaga irukku!');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 18;

test('Pos_Fun_0018 - Convert with time format', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('meeting 3.30 PM-ku irukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 19;

test('Pos_Fun_0019 - Convert with currency reference', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('idhu Rs. 500 mattum dhaan');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 20;

test('Pos_Fun_0020 - Convert informal greeting response', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('nalla irukken da');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 21;

test('Pos_Fun_0021 - Convert polite vs informal contrast', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('sir ungalukku oru nimisham time irukka?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 22;

test('Pos_Fun_0022 - Convert informal slang expression', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('semma mass-aa irukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 23;

test('Pos_Fun_0023 - Convert colloquial phrase with emotion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('aiyoo kashtam da');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 24;

test('Pos_Fun_0024 - Inconsistent capitalization in Thanglish', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('NAAN vEEtUkKu PoReN');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 25;

test('Neg_Fun_0001 - Joined words without proper spacing', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naanveettukkuporenippothan');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 26;

test('Neg_Fun_0002 - Ambiguous Thanglish spelling variants', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('nanga naalaiku varuvom');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 27;

test('Neg_Fun_0003 - Heavy slang with mixed code-switching', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('machan namma weekend plan super-aa set aaiduchu bro mass-aa enjoy pannuvom da full-aa chill pannikalam');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 28;

test('Neg_Fun_0004 - Line breaks within sentence structure', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan veetukkuporennaalaikkuvaruven');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 29;

test('Neg_Fun_0005 - Special characters mixed in text', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan @home #working $100 earn');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 30;

test('Neg_Fun_0006 - Excessive punctuation repetition', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('neenga eppadi???????');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 31;

test('Neg_Fun_0007 - Numbers mixed without clear context', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('en 1st friend-ku 2nd time call');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 32;

test('Neg_Fun_0008 - Convert complex sentence with condition', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('neenga vandha naan ungalakku coffee kudukuren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 33; 

test('Neg_Fun_0009 - Slang', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('machan da');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 34;

test('Neg_Fun_0010 - Mixed English', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('hello machan');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

//Scenario 35;

test('Pos_UI_0001 - Convert short greeting with question', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('neenga epdi irukkeenga');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});