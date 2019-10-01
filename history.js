function addHistory() {
    if (historyItemId === 0) {
        historyList1.innerHTML = "";
        trashIcon3.style.display = "flex";
        historyList2.innerHTML = "";
        trashIcon4.style.display = "flex";
         historyIconImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAG3ElEQVR4nO2dXYhVVRTHf9fScUBxZvweE4JEJVPSHgwqy1H7MMmI3pIeKowoKopCMIo+SUKrpxRfokLQwKBeikiKeuihdMwsZyxFk6icdGpGyLR7e1j32nidOWufe9be+8x0frAZhnPvXmvv/7n77r3X2etCQUFBQUFBQUFBQcH/jVJsBxSmAIuAK4DLgUuAdmAqcBHQCvwNnAJOVv/+CnQNKHuA46EdH66MBW4F3gC+AyoGpQx0Aq8Cq6o2CgZQApYC7wB92HR6UukFtgLXkf8RwCvNwAPAQfx3+lDlILAWaPLc1ky8bFzfGOARZKyO1fH15VjVp2bjtppQwU6E1cS947XyA7DSqK1m1JzLIkI7sJN4HZu27ERmXLlgoGONiLAa6CFOR2YpvcCdDbQ3FS6zgErd/xuAdQ7vuxjYCDyc1qk6fga+Br4FvgF+BE4Af1ZLGRgHtCDrgjnAXGAesASYnMF2BZm+rgPOZKgnE4PdHdonoRX4eIj3upQvgfXAQrJNFUvAfOAxRMRG/fkMETgKQzk1lAjtwP6E9w1V+oHNyKrXF/OATTS23thbbVtwkpyqF+FSZCaRpmGngOcIe4dNBJ5Fti/S+HoYmBXQT3BwqibCFGTvxbUxZWAHIlos2oAtVV9c/T4KzAzppItTrwH7UjTiGNARshEKS4BDpBuOgn1i046VWnkPGQLyRgvp1iqfAqNDOGbZ+U+HcDgDJWTK6TokvRLCKYuOPwvcH8gfC9YgcQbNVhlZaHrFovPvCOiPFbchiy/NXg8ww9DuBWQV4MHA/lhyF27D0Q5ju+eRpfO/iOCPNescbFaAmzzYBkfjScU6nhBagBIyc9PsduMp3JlVAGsRQgsAMkV1WSc85MO4hQCWIsQQAOAG9O+Do0jEzxQrAaxEiCUAwNsO9u+zNmopgIUIMQWYigRqkux3Y/y0hbUAWUWIKQDACw4+XGtp0IcAWUSILcBE9HjCFkuDvgRoVITYAoCEKZN8OMkIfgIvDwLMd/DD6fGWUZ4cHOnsQ543TcIp3lEI0DjblOt5CjiZkochCOBKxY9/yGfgKTN5EaCEnDtI8mW5VkkxBDVOBfhcec0crZJCgGzsV64XAnjmgHK9EMAz3cr1aVoFhQDZ6FGuj9cqGIkCLA5oq0+5rgowHNGmob3A1YF8aVJ8+cvCyGnFiHkESMFlky+UCEEE+F0x0mZhJAVaQGSgCL6Ho0mKD+oBcZfvgLyNcx3ICRmNCcBH+P0kaG3X+s5EgEkOdViyG1iBuwgf4k8Ere0mAvyiXJ/tUIc1eRFBa7vWd04CdCnX1dWeJ/IgwlzlurZSNhHA55kujdgizFOuaytlJ24k+Zv+N+InvViEPluznqKOQt+OXmZgh0noT4TNtzCUkdAiLFRsOAVkXIagHuSAdBIrHOrxzW4kEP6Hw2snII8aZkFr817khjBhE8lqf2VlyACXT8IzBnb2KjZMjy+tUoxViPtlXE+SCBadv2CIugeWWwzsnKMZfQtgk6VBAwYTwaLzQY7lJvXFCTwkgdqqGO0n/KpYY6AIVp3v8mjiZiNb57FEMVpBjv/njcW4ZXdx5SX0frjG0N45SujZrk4iKQtGKtORFDlJfdCFx3XRWsV4BXjTl/EcsA29/ff6dKAJ+ElxoIwMVyONDvTOP0KAANWjjo6EDtT4pBVJVaO12/pM9KA045YTaCfx94gsKAHvo7e3i4D5R1c6OFTBdvYRi6dwa2vw7RiX1C5l4J7QjhmyBrdUBdtjODcTt93HMwTIKOKB23FL1nGcSLnkQDKdu9whZ/FwftYjd5OjdDUaG3EbI8vId0Kev5hLyJjvmrBpQxw3z2c0klfTxeEKkviiNYqnybThNtuplV0ESlnmQgv6/vjAchi4Poqng9OBrF1c/e9Egjq5op10mQcrwAfETZI9DXiLdGkrDyF7QrlkFulF6AWeJ+xW9mTgRfSNtcE6/7KAfjbEdNINR7XSh5xA9xngX4AEU/ob8K+THN/59bQgeTXTNrJW9gBPIEdBs5xhGIU8vfAk0oGN+rMLT2O+zynhaCR48XhGOz3IacT9wPfIw04nkKGrv/qaWvr6Ni5MX5/lrG4FCa6vR9Yyw5JVDM8fcOhBFpojghnAu8TvVNeynYjbCz5Zit0PtPkoB4GbvbU+JzQh2QWPEr/Da+UIEkzJ9e+JWTMG2aDrJl7HdyEx3NDn3HLHVcDr6E8bW5ReZPW7nBxsDEZ3oI6xyL7MsurfBWQ/y1xGFoa7gE+qf09nrNOMvAlQz0RkIVWb289GUkeOR+b946qv60fu7D7++znbA8jwtgfDp5QLCgoKCgoKCgoKCgqy8i/mw14ueZiPsQAAAABJRU5ErkJggg=="

        historyIcon.className = historyIcon.className.replace(" disabled", "");
    }

    const id1 = "hItem1_" + historyItemId;
    const id2 = "hItem2_" + historyItemId;

    const listItem1 = document.createElement("li");
    const itemExpression1 = document.createElement("div");
    const itemResult1 = document.createElement("div");

    const listItem2 = document.createElement("li");
    const itemExpression2 = document.createElement("div");
    const itemResult2 = document.createElement("div");

    listItem1.className = "history-item";
    itemExpression1.className = "history-item-expression";
    itemResult1.className = "history-item-result";

    listItem2.className = "history-item";
    itemExpression2.className = "history-item-expression";
    itemResult2.className = "history-item-result";

    itemExpression1.textContent = expression.textContent + " =";
    itemResult1.textContent = result.textContent;

    itemExpression2.textContent = expression.textContent + " =";
    itemResult2.textContent = result.textContent;

    listItem1.onclick = historyItemClick;
    listItem2.onclick = historyItemClick;

    var lastChild1 = historyList1.firstChild;
    var lastChild2 = historyList2.firstChild;

    listItem1.appendChild(itemExpression1);
    listItem1.appendChild(itemResult1);
    historyList1.insertBefore(listItem1, lastChild1);

    listItem2.appendChild(itemExpression2);
    listItem2.appendChild(itemResult2);
    historyList2.insertBefore(listItem2, lastChild2);


    listItem1.id = id1;
    listItem2.id = id2;

    historyItemId++;
}

function historyItemClick() {
    const id = this.id;
    const element = document.getElementById(id);
    
    expression.textContent = "";
    result.textContent = "";
    expression.textContent = element.childNodes[0].textContent.substr(0, element.childNodes[0].textContent.length - 2);
    result.textContent = element.childNodes[1].textContent;
    txtExpression = expression.textContent;
    txtResult = "";
    recalled = true;
}

function historyTrashFunct() {
    historyList1.innerHTML = "<li>There's no history yet</li>";
    historyList2.innerHTML = "<li style='margin-top: 12px'>There's no history yet</li>";

    trashIcon3.style.display = "none";
    trashIcon4.style.display = "none";

    historyItemId = 0;

    historyIcon.className += " disabled";
    historyIconImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAALG0lEQVR4nO2df4wcZRnHv897+6ORvR/9QQAVownYItgKGCUSC5T0B0ZSGhHlV5W2WDBw3szs9lohcUgM5W53ZrEcJmdKbYtgUkAqqdg7KBAgREwotEiklxIUjVotpb079Hq7+z7+sdtISG/ed3ZmdvdkPv/uM8/zznz3fef9+QwQExMTExMTExMTE/NRg5pdAC82btw4M51On8fMnwPweWaeS0QzAcwE0AGgHdV7eB/AewDeZ+ZDRHSAmQ8IIQ4kEolXu7u7/9W8u/CmpQSwbTuRyWS+IoS4Qkq5jIgWIHgZGcB+AM8C2DM2Nva0bdsTgQsbEi0hQLFY/IKU8hYA3wbQGXG4YwAeIaLthmG8SEQccTxPmibA4OBgcnx8/FoAtwK4qEnFOMjM+VQqta27u/t4MwrQpjJwHMceHh5+LqyAzEydnZ3XlEqlxwCsBvDJsHzXwSwiulJKedOSJUsqy5Yt2z80NFRuZAGUNcBxHAZwl2VZdtBg+Xz+UiFEHsAXg/qKiLcAdFuW9WSjAuoKAAQQIZ/Pn0JE/UR0q07MFuDxcrnc3dvb+9eoAwkftj9yHOcevwEcx7lICLGXiL6P6fHwAWBFIpH4Q6FQuDrqQH5qwAm0a4LruhYz90HjXePBIWb+vRDiDQCvVyqVt5j58IwZM0YBjKbTaXnkyJFMIpHoSiQSMyuVylwA84joXAALAZwaIDYDKGYymfVr164tBfAzJfUIAChEqPVw7gdwc53leoWIngDwpGEYr9TbVWRmKhaL5zHzYgDXA7igzvI8L4RYbhjG0Tqvn5J6BQCmEKFYLHZJKR8FcLnPsvwbwC+FED81DGOvz2u1cF33XACrmflmABk/1xLR/lKpdEVvb+/fwixTEAGAD4nQ19fXnkwmn2LmL/sowwQz3yeEuMc0zSM+rqubgYGB2RMTE91E1A2gy8elfyKixaZpHgyrLEEFAGoiDA4Ofmx8fPy3qLa7ujzEzHdks9k/+7gmNO69997TKpVKP4Abod9BeFsIcbFhGH8PowxhCABm/jERfQnAEs24hwCssSxrl6Z9pBQKhYVEtBXAZ3TsiWg/EV0SxjvBTzfUq0B3Qv/h75JSzm+Vhw8A2Wz2eSHEBQAe17Fn5vlSyp2Dg4PJoLFDEUAXZnbGxsaW53K5fzYyrg6GYRw1TfMbzLwB1e6nikvGx8fvDho3lCZIgwoR9ZimORDUkao8lmUFHuw5jnMDgC0AVP9wJqIVpmn+ut5YjagBTESrw3j4jcKyrF8AuBqAamKOpJQPuK77iXpjRS4AEeVM09wWdZywsSzrCWb+LhTNERHNZuZivXEiFYCInjNN04kyRpRks9mHmPmHGqbfLBQKS+uJEakAzHyp4zh2lDGixrKsPgA7VXZCiPts257h138j3gF1zaK2CkTEQoibALztZcfMZ3d0dKzx679R3dDe6VwTDMM4KqVcBcX7gJnX2bad8uO7keOAaV0TcrnccwAeUpidmclkVvrx29CBGKZ5TWhra8uiuqtiSoQQ65hZeyzSaAGAaVwTenp6DgHwHM8w89mO41ys67MZAgDVmjAtRUin00UA4142Qogbdf01SwBgmjZHt91227sANnvZMPM1ul3ShMogjLmV/zeIaAsz93iYdLW3ty8CoNze0swaMG0xTfN1Zn7Ny4aZF+n4igWoEyHEw16/E1EsQJQQ0VMKkwUDAwOzVX5iAeqkp6dnH4DDHiaiVCqdr/ITC1Antb1KL3jZSCnnqvzEAgSAmd9QmMQCRMybit9jASJmxOtHIjpd5SAWIADM7PUSBjO3q3z83wmQz+f9bIsMBBGNKUw+egIIIYYcx2nImbNUKhVYAOVckOM4xwFMucozNjaWtm17UuWngXQC2O04zjLLsn7X7MKoUNYAZvZUec6cOUqVQ8ZzQaRGJ4DdUTdHk5OTqntX1RC1AETkOfc9MTHha599UIQQiwDobGPvjLo50njJBhdAw8kcDR+hYRjGXinl19ACNYGIPO9d4yWt1QT9Q2HyWZWPsMnlci9LKZdCUwQhxFBEInjeu8az02qCDih+V472oiCXy73cAs3RPMXvqpGyVg3wFADAeSofUdHs5qh2EtMLz5EyoCGAEEIlwEI/2zDCplk1wbZtAeCrCrPgNUBKuRfeO8JOLRaLTasFQHNqQnt7+wJ4d0BkOp32XLYENATIZrOHUc23MyW1c7hNxe+LmYguCxJP45731XZQeKI1FUFEzyhMrtPxEzU+miM7m80G2pckhLheYbJHy4+OETOrBLgwn883tRk6gUZzdJdlWXcFiZHP5+cz83wvG41nBkC/BuyBomq3tbWt0vHVCDyao1DS7mjc63upVCo8AUzT/A+AR7xsmPl7hUKhoaNiL07SHNlhPPyBgYHZzLxaYbZDNwOX9nQ0EW1XmJxSO/rfMpxojph5Q9Bm5wTHjx+3oMgzIYR4UNefdv+dmcl13REAZ3mYHZVSzm3Fc8BhUCwWz5BSHoD3PP+IaZrzdDO8+KkBzMx5hVkXEfXr+pxuSCkdKBZZapnBtM9W+1oRS6VS24jIM40XEa0sFAp+EnZMC/L5/CIA1yrM3hkdHdVufgCfAnR3dx9nZtWxUyKiB13XneXHdyuzcePGmUKIBzRM+/2uDvpeEyaiQVSzC3rxKWbe3Mw5orBgZkomk9sAfFphOpJMJj3PDZwM37nchoaGykuXLj2IagowL8556aWXJoaHh1/0G6OV6OzsvBPALSo7Zr7WMAzl7OeHqfsf6jjOrwCsUJgxqnmBttQbp5nUknZsh+I5MfOObDb7rXpiBNmW8gOo51wIwKDrussDxGkKhULhKgA/h/pPerhSqRj1xqlbAMuy/iKlXAl1bp0EMz9WKBR8nyJvFo7jrCSiHVBv22EiWhMkkV+gjVm5XO43AHQyhbQR0c8KhcL6Vn4x1wabdwLYCnWuIADIB8kVBISQybaWI/Rp6Cfr2zk5Oblqw4YN7wWNHSau686SUm4lois1L3k2k8ksDZrQNfDWxLVr15aEEMuJyHPR5gNclUql9rque0nQ2GGRz+cXMfOrPh7+vlKptCKMbLqhNQd9fX0fTyQSL0Iz82CNXeVy+dZGJMk+Gf39/acnEol+Zr4BrZq20g+u657FzMPwJ8IxZr4PwE9qy5+Rs2nTplPL5XIPM98OjQ20H+DtSqWyeN26daqBqDahvxCLxeIZzLxbtWJ0EsYBbCaiLaZpvh52uYDqSlZbW9sqZl4D4BSfl+8TQlwR1j//BJH0SGr5o3cCqKudZ+bXhBAPE9FTx44d22/btqzHj23bor29fQEzLyai6wAsqMcPgGdLpdKK9evX6yz4+yKyLmGtd3Q3ACtgnMMAXmDmN4QQfwQwQkRHmPno6OjoOAB0dHRkiKiLmWfVTibOI6JzmXkhESnP6nrAAPJjY2N32LYdyadNIu+TO47zdWbeGvBBNBxmfpeZv1Mb60RG5CdkLMvaJYRYQESPRh0rLJh5R6VSmR/1wwca/EkRx3EuA3A/gHMaGdcHB4nodtM0dzcqYMOnBTZt2pQul8s3M/M6AGc2Ov4UvAOgP5lMbm7098SaNi9j23Yqk8msrOVYO7tJxRghov7R0dEHm3XOrSUmxgqFwoVEtBLVLY5R7y06RkRPENH2np6ePR/ZTxmeDNu2Z9QyTV3OzIuIaD6CdxQkgH21rYJ7UqnUM836bOHJaCkBPszAwMDsUql0/om+PapHgk5DdfqgC//bIDUO4Ciq59kOAThARG8S0UgymXxVZ5dyTExMTExMTExMTExMo/gvI+5w+fansMsAAAAASUVORK5CYII="
}