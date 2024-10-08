import React from 'react';

const Datas = {
  profileImage: 'profile-image-url', // Replace with actual profile image URL
  businessName: 'Sree Ramachandra Engineering Works',
  description: 'WhatsApp business account',
  qrCode: 'qr-code-url', // Replace with actual QR code URL
};

const Whatsapp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-green-500">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={Datas.profileImage}
            alt="Profile"
            className="w-16 h-16 rounded-full border border-gray-300"
          />
        </div>

        {/* Business Name */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {Datas.businessName}
          </h2>
          <p className="text-sm text-gray-500">{Datas.description}</p>
        </div>

        {/* QR Code */}
        <div className="mt-6">
          <img
            src={Datas.qrCode}
            alt="QR Code"
            className="w-48 h-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;
