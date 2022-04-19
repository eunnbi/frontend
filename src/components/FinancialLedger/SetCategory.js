import styled from 'styled-components';
import React, {useState} from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { ModalWrapper, StyledModal, ButtonBox} from '../common/Modal';
import { CancelButton, SettingListContentWrapper, CheckButton } from './StyledComponentInSetting';
import InsertCategory from './InsertCategory';
import CategoryItemList from './CategoryList';



//인풋 박스
const InputBoxWrapper = styled.div`
    justify-content: center;
    font-size: 15px;
`;

//카테고리 설정 컴포넌트
function SetCategory({content}){
    const [items, setItems] = useState([
    { id: 1,
      text: '월급',
      checked: false,
    },
    {
      id: 2,
      text: '주식',
      checked: false,
    },
    {
      id: 3,
      text: '기타',
      checked: false,
    },
  ]);
    const [isOpen, setIsOpen] = useState(false);

    const [isClicked, setIsClicked] = useState(false);

    const openCategoryModalHandler = () => {
        setIsOpen(true)
    };


    //입력 박스 핸들러 조정
    const openInputBoxHandler = () => {
        setIsClicked(true)
    }

    //취소 버튼을 부르면 입력값도 모두 사라지도록 설정
    const closeCategoryModalHandler = () => {
        setIsOpen(false)
    }

    //취소를 클릭하면, 다시 아이콘이 뜨도록 설정하고 싶음
     const closeCategoryInputHandler = () => {
        setIsOpen(false)
    }

    const [category,SetCategory] = useState(" ");

    //카레고리 입력값 설정
    const onCategoryModalHandler = (event) => { 
    SetCategory(event.currentTarget.value)
    }

    const onCategorySubmit = (event) => {
        event.preventDefault();
        //입력 받은 내용을 화면에 표시해주기
            var category = document.getElementById("category");
            var categoryContentDiv = document.getElementById("categoryContent");
            var categoryValue = category.value; //입력 폼에 입력되는 카테고리 값

            var categoryList = document.createElement("div");
            categoryList.innerText = categoryValue;
            categoryList.style.borderBottom = "1px solid black";
            categoryList.style.width =  "300px";
            categoryList.style.padding = "10px";
            categoryList.style.textAlign = "left";
            categoryList.style.fontSize = "15px";

            categoryContentDiv.appendChild(categoryList);
            
    }

    const StyledAddCircleOutlinedIcon = {
        position: 'absolute',
        bottom: '10px;',
        right: '20px',
        display: isClicked ? "flex" : "none"
    };
    // + 아이콘, X 버튼, 삭제 아이콘 추가
    // + 아이콘을 누르면 입력창이 뜨도록

    return(
        <SettingListContentWrapper>
            {content}
            <ChevronRightRoundedIcon onClick={openCategoryModalHandler}></ChevronRightRoundedIcon>
            <ModalWrapper show={isOpen}>
                <StyledModal>
                <h1>{content}</h1>
                <div className="Modal-close-btn" onClick={closeCategoryModalHandler}>&times;</div>
                    <AddCircleOutlinedIcon className="modalIcon" onclick={openInputBoxHandler} style={StyledAddCircleOutlinedIcon} show={isClicked}></AddCircleOutlinedIcon>
                        <CategoryItemList items={items}></CategoryItemList>
                        <InsertCategory></InsertCategory>
                </StyledModal>
                </ModalWrapper>
        </SettingListContentWrapper>
    );
}

export default SetCategory;