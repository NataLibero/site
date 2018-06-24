describe('Timer', () => {
	
	it("Возвращает ли функция объект?", () =>{
		assert.typeOf(getTimeRemaining(), 'object')
	});
	it('Устанавливаем таймер обратного отсчета', () => {
		assert.typeOf(setClock('timer', deadline), 'string')
	})

	describe('Общая сумма', () => {
		it('Изначально равен 0', () => {
			assert.equal(total, 0)
		})
	})

})




