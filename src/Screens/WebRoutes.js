import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import { ForgotPasswordScreen } from './ForgotPasswordScreen';
import LoginScreen from './LoginScreen';
import LoginVerificationScreen from './LoginVerificationScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import Logistics from '../Extras/Logistics';
import Splash from './SplashScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import HelpCenter from './HelpCenter';
import InActiveAccountPopup from './InActiveAccountPopup';
import InvalidNamePasswordPopup from './InvalidNamePasswordPopup';
import MaxAttemptsPopup from './MaxAttemptsPopup';
import ChangePasswordPopup from './ChangePasswordPopup';
import { CableTieQrScreen } from '../Extras/CableTieQrScreen';
import PickupDetailsScreen from '../Extras/PickupDetailsScreen';
import LogisticsConfirmSamplePopup from '../Extras/LogisticsConfirmSamplePopup';
import LogisticsSignature from '../Extras/LogisticsSignature';
import LogisticsSignatureSampleCollected from '../Extras/LogisticsSignatureSampleCollected';
import LogisticsCollected from '../Extras/LogisticsCollected';
import LogisticsConfirmation from '../Extras/LogisticsConfirmation';
import LogisticsCancelSamplePopup from '../Extras/LogisticsCancelSamplePopup';
import LogisticsDelivered from '../Extras/LogisticsDelivered';
import LogisticsQrCodeScan from '../Extras/LogisticsQrCodeScan';

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/logistics' element={<Logistics />} />
        <Route path='/logistics_collected' element={<LogisticsCollected />} />
        <Route path='/splash' element={<Splash />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/forgot_password' element={<ForgotPasswordScreen />} />
        <Route path='/change_password' element={<ChangePasswordScreen />} />
        <Route path='/login_verify' element={<LoginVerificationScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/settings' element={<SettingScreen />} />
        <Route path='/help_center' element={<HelpCenter />} />
        <Route path='/inactive_popup' element={<InActiveAccountPopup />} />
        <Route path='/invalid_name_password_popup' element={<InvalidNamePasswordPopup />} />
        <Route path='/max_attempts_popup' element={<MaxAttemptsPopup />} />
        <Route path='/change_password_popoup' element={<ChangePasswordPopup />} />
        <Route path='/cable_tie_qr' element={<CableTieQrScreen />} />
        <Route path='/pick_up_details' element={<PickupDetailsScreen />} />
        <Route path='/logistics_confirm_sample_pop_up' element={<LogisticsConfirmSamplePopup />} />
        <Route path='/logistics_cancel_sample_pop_up' element={<LogisticsCancelSamplePopup />} />
        <Route path='/logistics_signature' element={<LogisticsSignature />} />
        <Route path='/logistics_signature_sample' element={<LogisticsSignatureSampleCollected />} />
        <Route path='/logistics_confirmation' element={<LogisticsConfirmation />} />
        <Route path='/logistics_delivered' element={<LogisticsDelivered />} />
        <Route path='/logistics_qr_code_scan' element={<LogisticsQrCodeScan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default WebRoutes;