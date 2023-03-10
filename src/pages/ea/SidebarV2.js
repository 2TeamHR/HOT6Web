import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Collapse } from '@mui/material';
import { StarBorder } from '@mui/icons-material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const sidebarCategoryName = [
  { sidebarCategoryId: 1, menuPrimaryName: "마이페이지", },
  { sidebarCategoryId: 2, menuPrimaryName: "인사" },
  { sidebarCategoryId: 3, menuPrimaryName: "근태" },
  { sidebarCategoryId: 4, menuPrimaryName: "전자결재" },
  { sidebarCategoryId: 5, menuPrimaryName: "급여" },
  { sidebarCategoryId: 6, menuPrimaryName: "게시판" },
  { sidebarCategoryId: 7, menuPrimaryName: "캘린더" },
  { sidebarCategoryId: 8, menuPrimaryName: "메세지" }
];

// const sidebarListSecond = [
//   // { sidebarCategoryId: , menuMidName: "", menuSubName: "", menuLink: "" }
//   { sidebarCategoryId: 1, menuSecondaryName: "마이페이지", menuSubName: "나의 인사 카드", menuLink: "/myPage/main" },

//   { sidebarCategoryId: 2, menuSecondaryName: "조직도", menuSubName: "재직자명단", menuLink: "/organization/chart" },
//   { sidebarCategoryId: 2, menuSecondaryName: "증명서", menuSubName: "신청 현황", menuLink: "/organization/certification" },
//   { sidebarCategoryId: 2, menuSecondaryName: "인사팀 관리", menuSubName: "신규 사원 등록", menuLink: "/organization/create" },
//   { sidebarCategoryId: 2, menuSecondaryName: "인사팀 관리", menuSubName: "인사 이동 명단", menuLink: "/" },
//   { sidebarCategoryId: 2, menuSecondaryName: "인사팀 관리", menuSubName: "퇴직자 명단", menuLink: "/" },
//   { sidebarCategoryId: 2, menuSecondaryName: "인사팀 관리", menuSubName: "상여금 명단", menuLink: "/" },

//   { sidebarCategoryId: 3, menuSecondaryName: "근태관리", menuSubName: "근태 조회 및 관리", menuLink: "/attendence/AttendanceManage" },
//   { sidebarCategoryId: 3, menuSecondaryName: "근태관리", menuSubName: "근무 시간 이력", menuLink: "/attendence/AttendanceSelectTime" },
//   { sidebarCategoryId: 3, menuSecondaryName: "휴가관리", menuSubName: "연차 결재 리스트", menuLink: "/annual/payment" },
//   { sidebarCategoryId: 3, menuSecondaryName: "휴가관리", menuSubName: "연차 내역", menuLink: "/annual/history" },
//   { sidebarCategoryId: 3, menuSecondaryName: "휴가관리", menuSubName: "연차 관리", menuLink: "/annual/management" },

//   { sidebarCategoryId: 4, menuSecondaryName: "전자결재", menuSubName: "메인", menuLink: "/es/main" },
//   { sidebarCategoryId: 4, menuSecondaryName: "기안함", menuSubName: "기안하기", menuLink: "/es/draftMenu" },
//   { sidebarCategoryId: 4, menuSecondaryName: "기안함", menuSubName: "결재 기안함", menuLink: "/es/draftInbox" },
//   { sidebarCategoryId: 4, menuSecondaryName: "결재 수신함", menuSubName: "결재 대기 문서함", menuLink: "/es/wait" },
//   { sidebarCategoryId: 4, menuSecondaryName: "결재 수신함", menuSubName: "결재 진행 문서함", menuLink: "/es/prograss" },
//   { sidebarCategoryId: 4, menuSecondaryName: "결재 수신함", menuSubName: "결재 완료 문서함", menuLink: "/es/complete" },

//   { sidebarCategoryId: 5, menuSecondaryName: "급여", menuSubName: "급여조회", menuLink: "/salary/check" },
//   { sidebarCategoryId: 5, menuSecondaryName: "인사팀 관리", menuSubName: "급여 지급 현황", menuLink: "/salary/checkN" },
//   { sidebarCategoryId: 5, menuSecondaryName: "인사팀 관리", menuSubName: "퇴직금 지급 현황", menuLink: "/salary/severanceN" },

//   { sidebarCategoryId: 6, menuSecondaryName: "게시판", menuSubName: "공지사항", menuLink: "/board/notice" },
//   { sidebarCategoryId: 6, menuSecondaryName: "게시판", menuSubName: "커뮤니티", menuLink: "/board/community" },

//   { sidebarCategoryId: 7, menuSecondaryName: "캘린더", menuSubName: "일정관리", menuLink: "/" },

//   { sidebarCategoryId: 8, menuSecondaryName: "메세지", menuSubName: "메세지 보내기", menuLink: "/messsage/message" },
//   { sidebarCategoryId: 8, menuSecondaryName: "메세지", menuSubName: "받은 메세지", menuLink: "/messsage/receivedMessage" },
//   { sidebarCategoryId: 8, menuSecondaryName: "메세지", menuSubName: "보낸 메세지", menuLink: "/messsage/MessageSent" },
//   { sidebarCategoryId: 8, menuSecondaryName: "메세지", menuSubName: "휴지통", menuLink: "/messsage/MessageTrash" }
// ];


const sidebarList = [
  // { sidebarCategoryId: , menuMidName: "", menuSubName: "", menuLink: "" }
  { sidebarCategoryId: 1, menuSecondaryName: "마이페이지", menuSubName: "나의 인사 카드", menuLink: "/myPage/main" },

  { sidebarCategoryId: 2, menuSecondaryName: "조직도", menuSubName: "재직자명단", menuLink: "/organization/chart" },
  { sidebarCategoryId: 2, menuSecondaryName: "증명서", menuSubName: "신청 현황", menuLink: "/organization/certification" },
  { sidebarCategoryId: 2, menuSecondaryName: "인사팀 관리", menuSubName: "신규 사원 등록", menuLink: "/organization/create" },
  { sidebarCategoryId: 2, menuSecondaryName: "인사팀 관리", menuSubName: "인사 이동 명단", menuLink: "/" },
  { sidebarCategoryId: 2, menuSecondaryName: "인사팀 관리", menuSubName: "퇴직자 명단", menuLink: "/" },
  { sidebarCategoryId: 2, menuSecondaryName: "인사팀 관리", menuSubName: "상여금 명단", menuLink: "/" },

  { sidebarCategoryId: 3, menuSecondaryName: "근태관리", menuSubName: "근태 조회 및 관리", menuLink: "/attendence/AttendanceManage" },
  { sidebarCategoryId: 3, menuSecondaryName: "근태관리", menuSubName: "근무 시간 이력", menuLink: "/attendence/AttendanceSelectTime" },
  { sidebarCategoryId: 3, menuSecondaryName: "휴가관리", menuSubName: "연차 결재 리스트", menuLink: "/annual/payment" },
  { sidebarCategoryId: 3, menuSecondaryName: "휴가관리", menuSubName: "연차 내역", menuLink: "/annual/history" },
  { sidebarCategoryId: 3, menuSecondaryName: "휴가관리", menuSubName: "연차 관리", menuLink: "/annual/management" },

  { sidebarCategoryId: 4, menuSecondaryName: "전자결재", menuSubName: "메인", menuLink: "/es/main" },
  { sidebarCategoryId: 4, menuSecondaryName: "기안함", menuSubName: "기안하기", menuLink: "/es/draftMenu" },
  { sidebarCategoryId: 4, menuSecondaryName: "기안함", menuSubName: "결재 기안함", menuLink: "/es/draftInbox" },
  { sidebarCategoryId: 4, menuSecondaryName: "결재 수신함", menuSubName: "결재 대기 문서함", menuLink: "/es/wait" },
  { sidebarCategoryId: 4, menuSecondaryName: "결재 수신함", menuSubName: "결재 진행 문서함", menuLink: "/es/prograss" },
  { sidebarCategoryId: 4, menuSecondaryName: "결재 수신함", menuSubName: "결재 완료 문서함", menuLink: "/es/complete" },

  { sidebarCategoryId: 5, menuSecondaryName: "급여", menuSubName: "급여조회", menuLink: "/salary/check" },
  { sidebarCategoryId: 5, menuSecondaryName: "인사팀 관리", menuSubName: "급여 지급 현황", menuLink: "/salary/checkN" },
  { sidebarCategoryId: 5, menuSecondaryName: "인사팀 관리", menuSubName: "퇴직금 지급 현황", menuLink: "/salary/severanceN" },

  { sidebarCategoryId: 6, menuSecondaryName: "게시판", menuSubName: "공지사항", menuLink: "/board/notice" },
  { sidebarCategoryId: 6, menuSecondaryName: "게시판", menuSubName: "커뮤니티", menuLink: "/board/community" },

  { sidebarCategoryId: 7, menuSecondaryName: "캘린더", menuSubName: "일정관리", menuLink: "/" },

  { sidebarCategoryId: 8, menuSecondaryName: "메세지", menuSubName: "메세지 보내기", menuLink: "/messsage/message" },
  { sidebarCategoryId: 8, menuSecondaryName: "메세지", menuSubName: "받은 메세지", menuLink: "/messsage/receivedMessage" },
  { sidebarCategoryId: 8, menuSecondaryName: "메세지", menuSubName: "보낸 메세지", menuLink: "/messsage/MessageSent" },
  { sidebarCategoryId: 8, menuSecondaryName: "메세지", menuSubName: "휴지통", menuLink: "/messsage/MessageTrash" }
];

























// const map = sidebarCategoryName.map(name => console.log(name.menuSubName));


export default function SidebarV2(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {sidebarCategoryName.map((list, index) => (
        <ul>{list.menuPrimaryName}
          <li>{list.sidebarList.map((list, menuSecondaryName) => (
            <ul>{list.menuSecondaryName}
              <li></li></ul>
          ))}</li></ul>
      ))}


    </>

  );
}