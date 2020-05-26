// TASK 2
describe("Тест функции changeConten", function () {
  describe("Валидные данные", function () {
    it("Есть все элементы в объекте. item1", function () {
      const itemObj = {
        title: "Hello",
        description: "Test passed",
      };
      changeContent(document.getElementById("item1"), itemObj);
      const changedHTML = document.getElementById("item1");
      changedTitle = changedHTML.children[0].innerHTML;
      changedDescription = changedHTML.children[1].innerHTML;

      assert.equal(changedTitle, itemObj.title);
      assert.equal(changedDescription, itemObj.description);
    }),
      it("Отличные от test и description элементы", function () {
        const itemObj = {
          head: "Hello",
          desc: "Test passed",
        };
        changeContent(document.getElementById("item2"), itemObj);
        const changedHTML = document.getElementById("item2");
        changedTitle = changedHTML.children[0].innerHTML;
        changedDescription = changedHTML.children[1].innerHTML;

        assert.equal(changedTitle, itemObj.head);
        assert.equal(changedDescription, itemObj.desc);
      }),
      it("Есть не нужное свойство в объекте", function () {
        const itemObj = {
          header: "Hello",
          info: "Test passed",
          addition: "Info",
        };
        changeContent(document.getElementById("item3"), itemObj);
        const changedHTML = document.getElementById("item3");
        changedTitle = changedHTML.children[0].innerHTML;
        changedDescription = changedHTML.children[1].innerHTML;

        assert.equal(changedTitle, itemObj.header);
        assert.equal(changedDescription, itemObj.info);
      });
  }),
    describe("Не валидные данные. Вызов ошибок", function () {
      it("Нет первого необходимого свойства в объекте", function () {
        const itemObj = {
          header: "Hello",
          desc: "Test passed",
        };
        expect(() =>
          changeContent(document.getElementById("item4"), itemObj)
        ).to.throw();
      }),
        it("Нет второго необходимого свойства в объекте", function () {
          const itemObj = {
            title: "Hello",
            desc: "Test passed",
          };
          expect(() =>
            changeContent(document.getElementById("item5"), itemObj)
          ).to.throw();
        }),
        it("Нет ни одного необходимого свойства в объекте", function () {
          const itemObj = {
            abc: "Hello",
            foo: "Test passed",
          };
          expect(() =>
            changeContent(document.getElementById("item6"), itemObj)
          ).to.throw();
        }),
        it("Пустой объект", function () {
          const itemObj = {};
          expect(() =>
            changeContent(document.getElementById("item7"), itemObj)
          ).to.throw();
        }),
        it("Не объект", function () {
          const itemObj = "test";
          expect(() =>
            changeContent(document.getElementById("item7"), itemObj)
          ).to.throw();
        });
    });
});
