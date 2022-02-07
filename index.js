$(() => {
    $('#file-manager').dxFileManager({
      name: 'fileManager',
      fileSystemProvider: fileSystem,
      height: 450,
      permissions: {
        
        download: true,
      },
    });
  });