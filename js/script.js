"use strict";

document.addEventListener('DOMContentLoaded', function() {
    const fruitSelect = document.getElementById('fruitSelect');
    const quantityInput = document.getElementById('quantity');
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const errorMessage = document.getElementById('errorMessage');
    
    const fatResult = document.getElementById('fatResult');
    const fiberResult = document.getElementById('fiberResult');
    const calorieResult = document.getElementById('calorieResult');
    const proteinResult = document.getElementById('proteinResult');
    const carbsResult = document.getElementById('carbsResult');
    
    populateFruitDropdown();
    
    calculateBtn.addEventListener('click', calculateNutrition);
    resetBtn.addEventListener('click', resetForm);
    fruitSelect.addEventListener('change', hideErrorMessage);
    
    function populateFruitDropdown() {
        fruits.forEach(fruit => {
            const option = document.createElement('option');
            option.value = fruit.name;
            option.textContent = fruit.name;
            fruitSelect.appendChild(option);
        });
    }
    
    function calculateNutrition() {
        if (fruitSelect.selectedIndex === 0) {
            errorMessage.classList.remove('d-none');
            return;
        }
        
        hideErrorMessage();
        
        const selectedFruit = fruitSelect.value;
        const quantity = parseFloat(quantityInput.value);
        
        const fruitData = fruits.find(fruit => fruit.name === selectedFruit);
        
        if (fruitData && quantity > 0) {
            const calculatedFat = (fruitData.fat * quantity).toFixed(1);
            const calculatedFiber = (fruitData.fiber * quantity).toFixed(1);
            const calculatedCalories = (fruitData.calory * quantity).toFixed(1);
            const calculatedProtein = (fruitData.protein * quantity).toFixed(1);
            const calculatedCarbs = (fruitData.carbohydrate * quantity).toFixed(1);
            
            fatResult.textContent = `${calculatedFat} g`;
            fiberResult.textContent = `${calculatedFiber} g`;
            calorieResult.textContent = `${calculatedCalories} kcal`;
            proteinResult.textContent = `${calculatedProtein} g`;
            carbsResult.textContent = `${calculatedCarbs} g`;
        }
    }
    
    function resetForm() {
        fruitSelect.selectedIndex = 0;
        quantityInput.value = 1;
        
        fatResult.textContent = '';
        fiberResult.textContent = '';
        calorieResult.textContent = '';
        proteinResult.textContent = '';
        carbsResult.textContent = '';
        
        hideErrorMessage();
    }
    
    function hideErrorMessage() {
        errorMessage.classList.add('d-none');
    }
});